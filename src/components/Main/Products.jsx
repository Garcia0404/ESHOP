import React, { useContext } from 'react'
import { CardProducts } from './CardProducts'
import { UsuarioContext } from '../../context/AppContext'

export const Products = () => {
  const { data } = useContext(UsuarioContext)
  return (
    <section className='grid grid-cols-main justify-self-stretch tablet:grid-cols-3 gap-6 p-6 place-content-center z-1 max-w-[900px] mx-auto'>
      {data.map((product, index) => (
        <article key={index}>
          <CardProducts {...product} />
        </article>
      ))}
    </section>
  )
}
