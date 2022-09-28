import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { Predicoes } from '../pages/Predicoes/Predicoes'
import { Produtos } from '../pages/Produtos/Produtos'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/predicoes" element={<Predicoes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </BrowserRouter>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="Login" />} />
      <BrowserRouter />
    </BrowserRouter>
  )
}
