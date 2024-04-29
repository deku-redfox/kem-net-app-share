import React from 'react'

const Skeleton = ({children, isLoaded, className='', width='', white= false}) => {
  return (
    <div className={`relative flex items-center ${width}`}>
        {children}
        {
            !isLoaded &&
            <div className={`absolute left-0 top-0 w-full h-full p-2 rounded-lg 
                ${white ? 'bg-white/70' : 'bg-skeleton'} animate-pulse ${className}`}></div>
        }
    </div>
  )
}

export default Skeleton