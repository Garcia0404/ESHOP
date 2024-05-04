import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContext } from './context/AppContext'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes/AppRoutes'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider>
      <AppContext>
        <AppRoutes></AppRoutes>
      </AppContext>
    </NextUIProvider>
  </BrowserRouter>
)
