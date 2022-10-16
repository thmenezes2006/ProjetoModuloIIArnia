import { createContext, useEffect, useState } from 'react'
import { Title } from '../../components/Title/Title'
import { apiService } from '../../services/config/apiService'

type ContextType = {
  authentified: boolean
  loading: boolean
}

export const AuthContext = createContext<ContextType>({
  authentified: false,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authentified, setAuthentified] = useState<boolean>(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const convert = JSON.parse(token)
      apiService.defaults.headers.common.Authorization = `${convert.type} ${convert.token}`
      setAuthentified(true)
    } else {
      setAuthentified(false)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <Title title="Carregando..." />
  }

  return (
    <AuthContext.Provider value={{ authentified, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
