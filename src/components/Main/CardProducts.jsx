import React, { useContext } from 'react'
import { UsuarioContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
export const CardProducts = (product) => {
  const { addCart } = useContext(UsuarioContext)
  const navigate = useNavigate()

  return (
    <>
      <div className="relative flex w-64 md:80 h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border mx-auto">
        <div onClick={()=>navigate(`/products/${product.id}`)} className="cursor-pointer relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={product.image}
            className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p onClick={()=>navigate(`/products/${product.id}`)} className="cursor-pointer block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
              {product.title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${product.price}
            </p>
          </div>

        </div>
        <div className="p-6 pt-0 mt-auto">
          <button value={product.id} onClick={() => addCart(product)} className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}
