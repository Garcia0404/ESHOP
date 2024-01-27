import React,{useState,useEffect} from 'react'
import {productos} from '../../helpers/productos'
import {CardProducts} from './CardProducts'
export const Products = () => {
  const [products,setproducts] = useState([])
  useEffect(
    ()=>{productos().then(res=>setproducts(res))}
    ,[])
  console.log(products)
  return (
    products.map((product)=>(
      <CardProducts nombre={product.title} precio={product.price} image={product.image} descripcion={product.description}/>
    ))
  )
}
