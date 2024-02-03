import React,{useState,useEffect} from 'react'
import {productos} from '../../helpers/productos'
import {CardProducts} from './CardProducts'

export const Products = () => {
  const [products,setproducts] = useState([])
  
  useEffect(
    ()=>{productos().then(res=>setproducts(res))}
    ,[])
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 place-content-center z-1 max-w-[850px] mx-auto'>
      {products.map((product,index)=>(
      <article key={index}>
        <CardProducts {...product}/>
      </article>
    ))}
    </section>
  )
}
