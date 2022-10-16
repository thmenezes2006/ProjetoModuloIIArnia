import axios from 'axios'

export const apiService = axios.create({
  baseURL: 'https://api.teste.predicao.w3erp.com.br/',
  // headers: {
  //   Accept: 'aplication/json',
  //   'Content-Type': 'aplication/json',
  // },
})
