import React, { useContext } from 'react'
import { Products } from '../../components'
import { UsuarioContext } from '../../context/AppContext'
import { Loader } from '../../components'

export const Homepage = () => {
  const { loader } = useContext(UsuarioContext)
  return (
    <>
    {
      loader ? <Loader/>:<Products/>
    }
    </>
  )
}
