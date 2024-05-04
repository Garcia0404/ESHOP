import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage, ItemPage } from '..'
import { AppRouterPrivate } from './AppRouterPrivate'
import { Nav } from '../../components'
import { AnimatePresence } from 'framer-motion'
import { ShoppingCart } from '../../components'
import { UsuarioContext } from '../../context/AppContext'
export const AppRouterInternas = () => {
  const { openShop } = useContext(UsuarioContext)
  return (
    <AppRouterPrivate>
      <Nav></Nav>
      <AnimatePresence>
          {openShop && <ShoppingCart />}
      </AnimatePresence>
      <Routes>
        <Route path='/products' element={<Homepage></Homepage>}></Route>
        <Route path='/products/:id' element={<ItemPage></ItemPage>}></Route>
      </Routes>
    </AppRouterPrivate>
  )
}
