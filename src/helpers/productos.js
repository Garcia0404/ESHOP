export const productos = async()=>{
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}
export const productosID = async(id)=>{
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}