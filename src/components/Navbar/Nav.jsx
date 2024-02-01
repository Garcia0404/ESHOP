import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { UsuarioContext } from '../../context/AppContext'
import { ShoppingCart } from './ShoppingCart'
export const Nav = () => {
  const { openShoppingCart,items } = useContext(UsuarioContext)


  return (
    <>
      <nav className='flex items-center justify-between p-3 sticky top-0 right-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm z-10 border-b border-gray-200'>
        <div className='text-xl text-blue-500 font-bold'>Virtual Shop</div>
        <div className='z-10 hover:scale-105 transition-all' to='/Login'>Categorías</div>
        
        <div className='relative'>
          <div className='top-0 text-sm text-white right-0 rounded-full bg-black absolute z-20 w-4 h-4 grid place-content-center'>{items.length}</div>
          <svg onClick={openShoppingCart} className="z-10 w-10 h-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        
        <ShoppingCart></ShoppingCart>
      </nav>
    </>
  )
}
