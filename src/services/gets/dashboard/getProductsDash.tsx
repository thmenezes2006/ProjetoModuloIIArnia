import axios from 'axios'
import { apiService } from '../../config/apiService'

type Gets = {
  dateInicial: string
  statusProdutos: string
}

export const getProductsDash = async ({
  statusProdutos,
  dateInicial,
}: Gets) => {
  const todayDate = new Date(Date.now()).toLocaleString().split(',')[0]
  try {
    const result = await apiService.get(
      `dashboard/produtos?classificacao=${statusProdutos}&dataFim=${todayDate}&dataInicio=${dateInicial}`
    )

    if (result.status === 200) {
      console.log(todayDate)
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
