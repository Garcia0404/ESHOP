import { createContext,useState } from "react";
export const UsuarioContext = createContext()
export const AppContext = ({children}) => {
  const [shop,setshop] = useState([])
  return (
    <UsuarioContext.Provider value={{shop}}>
      {children}
    </UsuarioContext.Provider>
  )
}
