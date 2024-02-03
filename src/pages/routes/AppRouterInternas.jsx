import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage, ItemPage } from '..'
import { AppRouterPrivate } from './AppRouterPrivate'
import { Nav } from '../../components'
export const AppRouterInternas = () => {
  return (
    <AppRouterPrivate>
      <Nav></Nav>
      <Routes>
        <Route path='/products' element={<Homepage></Homepage>}></Route>
        <Route path='/products/:id' element={<ItemPage></ItemPage>}></Route>
      </Routes>
    </AppRouterPrivate>
  )
}
