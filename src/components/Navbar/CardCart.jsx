import React, { useEffect, useContext, useState } from 'react'
import { UsuarioContext } from '../../context/AppContext'
import { motion } from 'framer-motion'
import { removeItemCart } from '../../anim'
import { handleError } from '../Main/CardProducts'
export const CardCart = (itemCart) => {
  const { items, setItems, addCart, restCart } = useContext(UsuarioContext)
  const calcular = itemCart.price * itemCart.cantidad
  useEffect(() => {
    console.log('Agregado al carrito :)', calcular), [calcular]
  })

  function removerCart() {
    setItems(items.filter((item) => item.id !== itemCart.id))
  }

  return (
    <motion.li 
      variants={removeItemCart}
      initial={removeItemCart.initial}
      animate={removeItemCart.enter}
      exit={removeItemCart.exit}
      className={`bg-gray-100 w-full p-4 grid grid-cols-2 grid-rows-auto gap-4`}
      >
      <div className='grid place-content-center rounded-md w-32 h-32 overflow-hidden bg-white border mx-auto'>
        <img onError={handleError} className='w-full' src={itemCart.images[0]} height='100' width='100' alt={itemCart.id} />
      </div>
      <section className='flex flex-col justify-around'>
        <h3 className='text-sm font-light'>{itemCart.title}</h3>
        <span><span className='font-light text-gray-400'>Price x unit: </span> <br></br>S/ {itemCart.price}</span>
      </section>
      <div className='w-full flex justify-center'>
        <button onClick={() => restCart(itemCart)} type='button' className='bg-colorMain text-white rounded-s-3xl w-6'>-</button>
        <span className='m-auto'>{itemCart.cantidad}</span>
        <button onClick={() => addCart(itemCart)} type='button' className='bg-colorMain text-white rounded-e-3xl w-6'>+</button>
      </div>
      <div onClick={removerCart} className='cursor-pointer bg-main rounded-full w-8 h-8 grid place-content-center justify-self-end'>
        <svg className='fill-white stroke-main w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </div>
    </motion.li>
  )
}
