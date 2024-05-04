import React from 'react'

export const NavLink = ({children}) => {
  return (
    <li className='hover:bg-gray-300 rounded-md px-2 py-1 transition-all cursor-pointer'>{children}</li>
  )
}
