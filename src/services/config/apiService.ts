import axios from 'axios'

export const apiService = axios.create({
  baseURL: 'http://api.teste.predicao.w3erp.com.br/swagger-ui.html',
  headers: {
    Accept: 'aplication/json',
    'Content-Type': 'aplication/json',
  },
})
