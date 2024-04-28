import React,{useContext} from 'react'
import  {CardCart}  from './CardCart';
import { UsuarioContext } from '../../context/AppContext';
import { motion,AnimatePresence } from 'framer-motion';
import { slider } from '../../anim'
export const ShoppingCart = () => {
  const{openShoppingCart,items}=useContext(UsuarioContext)
  const total = items.reduce((accumulator,valor) => accumulator+valor.price*valor.cantidad , 0)

  
  return (
    <>
      <motion.section 
        variants={slider}
        initial={slider.initial}
        exit={slider.exit}
        animate={slider.enter}
        className='flex overflow-y-scroll fixed top-0 right-0 h-dvh w-full mobile:max-w-[400px] bg-white text-black z-30 shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] flex-col justify-between'>
        <div className='w-full py-2'>
          <ul className='list-none grid gap-2'>
            {
              items.map((item,index)=>(
                  <CardCart key={index} {...item}/>
              ))
            }
            
          </ul>
        </div>
        <footer className='sticky bottom-0 right-0 bg-white border border-gray-200 grid grid-rows-2 grid-cols-2 gap-2 px-2 pb-2'>
          <div className='flex pt-3 px-3 col-start-1 col-end-3 justify-end'><strong className='me-3'>Total: </strong>{total.toFixed(2)}</div>
          <button onClick={openShoppingCart} type='button' className='bg-gray-300 rounded-xl p-2'>Close</button>
          <button type='button' className='bg-colorMain text-white rounded-xl p-2'>Continue</button>
        </footer>
      </motion.section>
    </>
  )
}
