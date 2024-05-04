import axios from "axios"
const headers = {
  "Content-Type": 'application/json'
}
const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/products',
  headers: headers
})
export const getProducts = async (url) => {
  const response = await api.get(url)
  return response.data
}
