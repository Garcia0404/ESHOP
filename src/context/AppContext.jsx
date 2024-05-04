import { createContext, useState, useEffect } from "react";
export const UsuarioContext = createContext()
export const AppContext = ({ children }) => {
  //------------------------------------------
  const [selected,setSelected] =useState('?offset=0&limit=52')
  const [openShop, setOpenShop] = useState(false)
  const [items, setItems] = useState([])
  const { subtotal, setSubtotal } = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function openShoppingCart() {
    setOpenShop(!openShop)
  }

  function addCart(product) {
    const condicion = items.find((item) => item.id === product.id)
    if (condicion) {
      const updateProduct = { ...condicion, cantidad: condicion.cantidad + 1 }
      const updateCart = items.map((item) => (item.id === product.id) ? updateProduct : item)
      setItems(updateCart)
    } else {
      const newItem = { ...product, cantidad: 1 }
      setItems([...items, newItem])
    }
  }

  function restCart(product) {
    const condicion = items.find((item) => item.id === product.id)
    if (condicion.cantidad > 1) {
      const restar = { ...condicion, cantidad: condicion.cantidad - 1 }
      const resta = items.map((item) => (item.id === product.id) ? restar : item)
      setItems(resta)
    }
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('data'))
    if (data) {
      setUsername(data.Username)
      setPassword(data.Password)
      console.log('username:', data.Username, 'password:', data.Password)
    }
  }, [])


  return (
    <UsuarioContext.Provider value={{ openShop, setOpenShop, openShoppingCart, addCart, restCart, items, setItems, subtotal, setSubtotal, username, setUsername, password, setPassword,selected,setSelected }}>
      {children}
    </UsuarioContext.Provider>
  )
}
