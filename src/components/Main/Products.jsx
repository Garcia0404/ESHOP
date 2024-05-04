import React, { useContext } from 'react'
import { CardProducts } from './CardProducts'
import useSWR from 'swr'
import { getProducts } from '../../helpers/api'
import { Loader } from '../loading/Loader'
import { UsuarioContext } from '../../context/AppContext'


export const Products = () => {
  const { selected } = useContext(UsuarioContext)
  const { data,error } = useSWR(selected,getProducts)
  if(error) return <div>Ocurrió un error al cargar los datos</div>
  if(!data) return <Loader/>
  console.log(data)
  return (
    <section className='grid grid-cols-main justify-self-stretch lg:grid-cols-4 gap-6 p-6 place-content-center z-1'>
      {data.map((product, index) => (
        <article key={index}>
          <CardProducts {...product} />
        </article>
      ))}
    </section>
  )
}
