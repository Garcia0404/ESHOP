import React,{useContext, useEffect} from 'react'
import  {CardCart}  from './CardCart';
import { UsuarioContext } from '../../context/AppContext';

export const ShoppingCart = () => {
  const{openShop,openShoppingCart,items}=useContext(UsuarioContext)
  const close = openShop?'overflow-auto absolute top-0 right-0 h-dvh w-full min-[350px]:w-80 bg-white text-black z-30 shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-0 visible transition-all ease-in-out duration-300 flex flex-col justify-between':'absolute top-0 right-0 h-dvh w-3/4 sm:w-2/5 rounded-s-3xl bg-white text-black z-[10] shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] translate-x-[100%] invisible transition-all ease-in-out duration-300 flex flex-col justify-between'
  const total = items.reduce((accumulator,valor) => accumulator+valor.price*valor.cantidad , 0)
  
  return (
    <>
      <section className={close}>
        <div className='w-full p-2'>
          <ul className='list-none grid gap-2'>
            {
              items.map((item,index)=>(
                <article key={index}>
                  <CardCart {...item}/>
                </article>
              ))
            }
          </ul>
        </div>
        <footer className='sticky bottom-0 right-0 bg-white border border-gray-200 grid grid-rows-2 grid-cols-2 gap-2 px-2 pb-2'>
          <div className='flex pt-3 px-3 col-start-1 col-end-3 justify-end'><strong className='me-3'>Total: </strong>{total.toFixed(2)}</div>
          <button onClick={openShoppingCart} type='button' className='bg-gray-300 rounded-xl p-2'>Cerrar</button>
          <button type='button' className='bg-colorMain text-white rounded-xl p-2'>Continuar</button>
        </footer>
      </section>
    </>
  )
}
