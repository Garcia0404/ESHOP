import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContext } from './context/AppContext'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes/AppRoutes'
import {Navbar} from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <AppRoutes></AppRoutes>
    </AppContext>
  </BrowserRouter>
)
