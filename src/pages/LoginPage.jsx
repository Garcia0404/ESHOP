import React,{useContext, useEffect, useState} from 'react'
import { UsuarioContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
export const LoginPage = () => {
  const { username,setUsername,password,setPassword } = useContext(UsuarioContext)
  const [ nombre,setNombre ] = useState('')
  const [ contraseña,setContraseña ] = useState('')
  const navigate = useNavigate()

  function submitForm(e){
    e.preventDefault()
    /*
    if((nombre.toLowerCase()).trim()==='julio'&&contraseña.trim()==='123'){
      navigate('/inicio')
    }else{
      alert('Usuario no registrado')
    }
    */
    if(nombre&&contraseña) {
      setUsername(nombre)
      setPassword(contraseña)
      setNombre('')
      setContraseña('')
      navigate('/inicio')}else return alert('Llene todos los campos')
  }

  function handleChange(e){
    setNombre(e.target.value)
  }

  function handleChangePassword(e){
    setContraseña(e.target.value)
  }

  return (
    <>
      <main className='grid grid-cols-5 w-dvw h-dvh'>
        
        <section className='col-start-1 col-end-3 bg-colorMain text-white flex flex-col justify-center px-10'>
          <h1 className='font-bold  text-balance text-4xl mb-6 leading-relaxed bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Enter your account and discover new experiences</h1>
          <p className='font-light'>You do not have an account?</p>
          <div>
          <button className='bg-gray-600 p-3 rounded-md mt-6'>Create account here</button>
          </div>
        </section>
        
        <section className='col-start-3 col-end-6 flex flex-col items-center justify-center mx-20'>
          <h2 className='text-5xl font-semibold mb-3'>Sign in to account</h2>
          <p className='mb-3'>Sign up or log in to continue!</p>
          
          <form onSubmit={submitForm} className='flex flex-col gap-4 w-full'>
            <input onChange={handleChange} value={nombre} type="text" className='border rounded-md p-3' placeholder='Username'/>
            <input onChange={handleChangePassword} value={contraseña} type="password" className='border rounded-md p-3' placeholder='Password'/>
            <button type='submit' className='bg-black text-white p-3 rounded-md'>Login</button>
            <div className='flex justify-center items-center'>
              <span className='border w-full border-black'></span>
              <span className='px-4'>Or</span>
              <span className='border w-full border-black'></span>
            </div>
            <button type='button' className='flex border p-3 rounded-md'>
              <span>
                <img src='src/assets/google.png' width='30px' height='30px' alt="google.png" />
              </span>
              <span className='w-full'>Sign in with Google</span>
            </button>
          </form>
        </section>

      </main>
    </>
  )
}
