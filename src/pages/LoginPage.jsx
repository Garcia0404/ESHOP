import React,{useContext, useEffect, useState} from 'react'
import { UsuarioContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import googlePng from '../assets/google.png' 
export const LoginPage = () => {
  const { username,setUsername,password,setPassword } = useContext(UsuarioContext)
  const navigate = useNavigate()

  function handleChange(e){
    setUsername(e.target.value)
  }

  function submitForm(e){
    e.preventDefault()
    if(username&&password) {
      let datos = JSON.stringify({Username:username,Password:password})
      localStorage.setItem('data',datos)
      navigate('/inicio')}else return alert('Llene todos los campos')
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }

  
  return (
    <>
      <main className='tablet:grid tablet:grid-cols-5 overflow-x-hidden w-full tablet:h-dvh'>
        
        <section className='h-screen tablet:col-start-1 tablet:col-end-3 bg-colorMain text-white flex flex-col justify-center px-10'>
          <h1 className='font-bold  text-balance text-3xl tablet:text-4xl mb-6 leading-relaxed bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Enter your account and discover new experiences</h1>
          <p className='font-light'>You do not have an account?</p>
          <div>
          <button className='bg-gray-600 p-3 rounded-md mt-6 mb-3'>Create account here</button>
          </div>
        </section>
        
        <section className='h-screen max-w-lg min-[592px]:mx-auto tablet:col-start-3 tablet:col-end-6 flex flex-col items-center justify-center mx-10'>
          <h2 className='text-center text-4xl tablet:text-5xl font-semibold mb-3'>Sign in to account</h2>
          <p className='mb-3'>Sign up or log in to continue!</p>
          
          <form onSubmit={submitForm} className='flex flex-col gap-4 w-full'>
            <input onChange={handleChange} type="text" className='border rounded-md p-3' placeholder='Username'/>
            <input onChange={handleChangePassword} type="password" className='border rounded-md p-3' placeholder='Password'/>
            <button type='submit' className='bg-black text-white p-3 rounded-md'>Login</button>
            <div className='flex justify-center items-center'>
              <span className='border w-full border-black'></span>
              <span className='px-4'>Or</span>
              <span className='border w-full border-black'></span>
            </div>
            <button type='button' className='flex border p-3 rounded-md'>
              <span>
                <img src={googlePng} width='30px' height='30px' alt="google.png" />
              </span>
              <span className='w-full'>Sign in with Google</span>
            </button>
          </form>
        </section>

      </main>
    </>
  )
}
