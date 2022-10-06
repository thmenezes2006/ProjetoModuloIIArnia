import axios from 'axios'
import { apiService } from '../config/apiService'

export const authLogin = async (login: string, password: string) => {
  try {
    const result = await apiService.post('/autenticacao/login', {
      email: login,
      senha: password,
    })

    if (result.status === 200) {
      apiService.defaults.headers.common.Authorization = `${result.data.type} ${result.data.token}`
      localStorage.setItem('token', JSON.stringify(result.data))
      return { logged: true }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { login: false, message: 'Usuário ou senha incorreto' }
      }

      if (error.response?.status === 403) {
        return { login: false, message: 'Operação ilegal' }
      }

      if (error.response?.status === 404) {
        return { login: false, message: 'Página não encontrada' }
      }
    }
  }
  return { login: false, message: 'Erro' }
}
