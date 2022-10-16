import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { useContext } from 'react'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Predicoes } from '../pages/Predicoes/Predicoes'
import { Produtos } from '../pages/Produtos/Produtos'
import { AuthContext, AuthProvider } from '../contexts/AuthContext/AuthContext'
import { Title } from '../components/Title/Title'

function PrivateRoutes({ children }: { children: React.ReactNode }) {
  const { authentified, loading } = useContext(AuthContext)
  if (loading) {
    return <Title title="Carregando..." />
  }
  if (!authentified) {
    return <Navigate to="/login" />
  }
  return <div>{children}</div>
}
function NoLoginRoute({ children }: { children: React.ReactNode }) {
  const { authentified } = useContext(AuthContext)
  if (authentified) {
    return <Navigate to="/" />
  }
  return <div>{children}</div>
}

export function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <NoLoginRoute>
                <Login />
              </NoLoginRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          >
            <Route index element={<Dashboard />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            />
            <Route
              path="/predicoes"
              element={
                <PrivateRoutes>
                  <Predicoes />
                </PrivateRoutes>
              }
            />
            <Route
              path="/produtos"
              element={
                <PrivateRoutes>
                  <Produtos />
                </PrivateRoutes>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}
