import React, { useContext } from 'react'
import { UsuarioContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
export const handleError = (e) =>{
  const img = '/imgError.svg'
  e.target.src=img
}
export const CardProducts = (product) => {
  const { addCart } = useContext(UsuarioContext)
  const navigate = useNavigate()
  return (
    <>
      <div className="relative flex md:80 flex-col rounded-xl h-96 bg-white bg-clip-border text-gray-700 shadow-md border mx-auto">
        <div onClick={()=>navigate(`/products/${product.id}`)} className="cursor-pointer relative h-52 overflow-hidden rounded-t-xl bg-clip-border text-gray-700 bg-gray-200">
          <img src={product.images[0]}
            loading='lazy'
            className="h-auto w-full"
            alt={product.title}
            onError={handleError} 
          />
        </div>
        <div className="py-6 px-3">
          <div className="mb-2 flex gap-3 items-center justify-between">
            <p onClick={()=>navigate(`/products/${product.id}`)} className="cursor-pointer block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
              {product.title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${product.price}
            </p>
          </div>

        </div>
        <div className="p-6 pt-0 mt-auto">
          <button value={product.id} onClick={() => addCart(product)} className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-110 focus:opacity-[0.85] active:scale-95 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}
