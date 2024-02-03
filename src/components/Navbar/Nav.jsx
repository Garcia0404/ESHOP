import React, { useContext, useState } from 'react'
import { UsuarioContext } from '../../context/AppContext'
import { ShoppingCart } from './ShoppingCart'
import  catPng  from '../../assets/cat.png'
import { useNavigate } from 'react-router-dom'
export const Nav = () => {
  const { openShoppingCart, items } = useContext(UsuarioContext)
  const navigate = useNavigate()
  const { username,setUsername } = useContext(UsuarioContext)
  const [ userActive,setUserActive ] = useState(false)

  function onclickUser(){
    setUserActive(!userActive)
  }
  const styleUserActive = userActive?'block':'hidden'
  return (
    <>
      <nav className='flex items-center justify-between p-3 sticky top-0 right-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-md z-10'>
        <div onClick={()=>navigate('/products')} className='text-xl text-colorMain font-bold cursor-pointer'>Virtual Shop</div>
        <div className='flex gap-2 items-center'>
          <div className='relative'>
            <div className='top-0 text-sm text-white right-0 rounded-full bg-black absolute z-20 w-4 h-4 grid place-content-center'>{items.length}</div>
            <svg onClick={openShoppingCart} className="z-10 w-10 h-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          <span className='relative shadow-md shadow-violet-500/50 rounded-full h-[35px]'>
            <div onClick={onclickUser} className='cursor-pointer'>
              <img className='my-auto border-2 rounded-full border-[#d800ff]' src={catPng} alt="user" height="35px" width='35px' />
            </div>
            <div className={`bg-gray-100 ${styleUserActive} absolute top:0 right-0 rounded-md mt-2 border p-2 flex flex-col gap-1 shadow-md`}>
              <span className='font-semibold px-2 py-1'>Signed as<br></br><span className='font-medium text-gray-400'>{username}@example.com</span></span>
              <ul className='list-none flex flex-col gap-2'>
                <li className='hover:bg-gray-300 rounded-md px-2 py-1 transition-all cursor-pointer'>My Settings</li>
                <li className='hover:bg-gray-300 rounded-md px-2 py-1 transition-all cursor-pointer'>Configurations</li>
                <li className='hover:bg-gray-300 rounded-md px-2 py-1 transition-all cursor-pointer'>Help and Feedback</li>
                <li onClick={()=>{navigate('/'),localStorage.setItem('data',''),setUsername('')}} className='hover:bg-red-300 hover:text-red-500 rounded-md px-2 py-1 transition-all cursor-pointer'>Log Out</li>
              </ul>
            </div>
          </span>
        </div>

        <ShoppingCart></ShoppingCart>
      </nav>
    </>
  )
}
