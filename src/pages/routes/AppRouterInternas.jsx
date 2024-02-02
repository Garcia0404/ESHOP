import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from '..'
import { AppRouterPrivate } from './AppRouterPrivate'
export const AppRouterInternas = () => {
  return (
    <AppRouterPrivate>
      <Routes>
        <Route path='/inicio' element={<Homepage></Homepage>}></Route>
      </Routes>
    </AppRouterPrivate>
  )
}
