import React from 'react'

export const Loader = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-full grid place-content-center'>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-grayMain animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-grayMain animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-grayMain animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}
