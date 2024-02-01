import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {LoginPage} from '../LoginPage'
import { AppRouterInternas } from './AppRouterInternas'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/*' element={<AppRouterInternas></AppRouterInternas>}></Route>
    </Routes>
  )
}
