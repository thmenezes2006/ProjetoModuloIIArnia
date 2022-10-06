import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Predicoes } from '../pages/Predicoes/Predicoes'
import { Produtos } from '../pages/Produtos/Produtos'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/predicoes" element={<Predicoes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  )
}
