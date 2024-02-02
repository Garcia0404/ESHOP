import React, { useContext, useEffect, useState } from 'react'
import { UsuarioContext } from '../../context/AppContext'
import { Navigate } from 'react-router-dom'

export const AppRouterPrivate = ({children}) => {
  const { username } = useContext(UsuarioContext)
  const [ pendiente,setPendiente ]  = useState(true)

  useEffect(()=>{
    setPendiente(false)
  },[username])
  if(pendiente){
    return console.log('...')
  }
  return username ? children : <Navigate to='/'></Navigate>
  
}
