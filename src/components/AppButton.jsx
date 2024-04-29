import Link from 'next/link'
import React from 'react'

const AppButton = ({
  children,
  text,
  darkBg = true, 
  className,
  link = '', 
  external = false,
  onclick,
  download = false,
  disabled = false
}) => {
    const initial = 'border-color-primary bg-color-primary';
    const initialHover = 'hover:text-color-primary';

    const dark = 'border-color-secondary bg-color-secondary';
    const darkHover = 'hover:text-color-secondary';

    const btnClass = `${className} py-2 px-7 hover:bg-transparent text-white text-sm font-semibold  ${darkBg ? dark : initial} 
      ${dark ? darkHover : hoverEffect} border-2 flex items-center justify-center rounded-md duration-500 whitespace-nowrap`

    if (onclick) {
      return (
        <button type='button' onClick={onclick} className={btnClass} disabled={disabled}>
          <span>{text}</span>
          {children}
        </button>
      )
    }
    
    if (external) {
      return (
        <a href={link} target='blank' rel='noopener noreferer' className={btnClass} download='downloaded app'>
          <span>{text}</span>
          {children}
        </a>
      )
    } else {
      return (
        <Link href={link} className={btnClass}>
          <span>{text}</span>
          {children}
        </Link>
      )
    }
}

export default AppButton