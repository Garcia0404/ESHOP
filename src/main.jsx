import React from 'react'
import ReactDOM from 'react-dom/client'
import { Products } from './components'
import { AppContext } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <Products></Products>
  </AppContext>
)
