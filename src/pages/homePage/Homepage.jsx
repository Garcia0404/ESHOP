import React from 'react'
import { Aside, Products } from '../../components'

export const Homepage = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <div className='px-6 py-2'>
        <Aside />
      </div>
      <Products />
    </main>
  )
}
