import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Homepage } from '..'
export const AppRouterInternas = () => {
  return (
    <Routes>
      <Route path='/inicio' element={<Homepage></Homepage>}></Route>
    </Routes>
  )
}
