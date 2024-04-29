import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UsuarioContext } from '../../context/AppContext'
import { Loader,handleError } from '../../components'

export const ItemPage = () => {
  const { addCart, products, loader } = useContext(UsuarioContext)
  const params = useParams()
  const id = params.id
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    products(id).then(res => setData(res))
  }, [])

  //addCart desde la ruta dinámica-------------
  return (
    <>
      {
        loader?<Loader/>:
        <article className='relative grid gap-8 lg:grid-cols-2 mobileMd:p-5 mobileMd:border m-5'>
          <div onClick={() => navigate('/products')} className='absolute m-1 p-2 border-2 border-black cursor-pointer rounded-full hover:bg-colorMain hover:text-white transition-all'>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </div>
          <section className='grid place-content-center rounded-md overflow-hidden mobileLg:w-[400px] mobileLg:h-[400px] mx-auto bg-gray-200'>
            <img className='rounded-md' src={data.images} alt={data.images} width='400px' height='400px' onError={handleError} />
          </section>
          <main className='flex flex-col gap-4 bg-gray-100 rounded-3xl p-8'>
            <h1 className='text-balance font-bold text-2xl'>{data.title}</h1>

            <p className='text-pretty font-light'><strong>Description :</strong><br /><br />{data.description}</p>
            <p className='font-semibold mt-auto'>$ {data.price}</p>
            <button onClick={() => { addCart(data) }} className='bg-colorMain text-white rounded-md p-2 hover:bg-[#9E9D9B] hover:text-black active:scale-95 transition-all'>Add to cart</button>
          </main>
        </article>
      }
    </>
  )
}
