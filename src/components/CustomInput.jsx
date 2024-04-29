import React from 'react'

const CustomInput = ({
  type = 'text', 
  placeholder = '', 
  bgColor, 
  textColor, 
  strecth = false, 
  onchanged, 
  className,
  required = false
}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onchanged} required={required}
        className={`rounded-md pl-3 w-0 flex-1 ${bgColor ?? 'bg-color-grey-soft'} ${textColor ?? 'text-color-iron'} text-[15px]
        ${!strecth ? 'h-[50px]' : ''} outline-none border-2 border-transparent focus:border-color-primary focus:bg-transparent duration-300 ${className}`} />
  )
}

export default CustomInput