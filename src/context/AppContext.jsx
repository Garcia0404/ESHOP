import { createContext,useState } from "react";
export const UsuarioContext = createContext()
export const AppContext = ({children}) => {
  const [openShop,setOpenShop] = useState(false)
  const [items,setItems] = useState([])
  const {subtotal,setSubtotal} = useState(0)

  function openShoppingCart(){
    setOpenShop(!openShop)
    document.body.style.overflowY = openShop ? 'auto':'hidden';
  }
  function addCart(product) {
    const condicion = items.find((item)=>item.id===product.id)
    if(condicion){
      const updateProduct = {...condicion,cantidad: condicion.cantidad +1}
      const updateCart = items.map((item)=>(item.id===product.id)?updateProduct:item)
      setItems(updateCart)
    }else{
      const newItem = {...product,cantidad:1}
      setItems([...items,newItem])
    }
  }
  function restCart(product){
    const condicion = items.find((item)=>item.id===product.id)
    if(condicion.cantidad>1){
      const restar = {...condicion,cantidad:condicion.cantidad-1}
      const resta = items.map((item)=>(item.id===product.id)?restar:item)
      setItems(resta)
    }
  }


  return (
    <UsuarioContext.Provider value={{openShop,setOpenShop,openShoppingCart,addCart,restCart,items,setItems,subtotal,setSubtotal}}>
      {children}
    </UsuarioContext.Provider>
  )
}
