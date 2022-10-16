import axios from 'axios'
import { apiService } from '../../config/apiService'

export const getClientsDash = async () => {
  try {
    const result = await apiService.get(
      'dashboard/clientes?classificacao=EM_ALTA&dataFim=20/09/2022&dataInicio=15/09/2022'
    )

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { message: 'Usuário não autenticado' }
      }

      if (error.response?.status === 403) {
        return { message: 'Permissão Negada' }
      }

      if (error.response?.status === 404) {
        return { message: 'Página não encontrada' }
      }
    }
  }
  return { message: 'Erro' }
}
