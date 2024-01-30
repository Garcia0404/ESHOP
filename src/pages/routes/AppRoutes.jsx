import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Homepage } from '../Homepage'
import {LoginPage} from '../LoginPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}
