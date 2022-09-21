import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Predicoes } from '../pages/Predicoes/Predicoes'
import { Produtos } from '../pages/Produtos/Produtos'

export function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/predicoes" element={<Predicoes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<Navigate to="/Dashboard" />} />
      </Routes>
    </div>
  )
}
