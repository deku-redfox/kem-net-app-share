import Image from 'next/image'
import React from 'react'

const ProfileImg = ({
    imageUrl,
    scale = 1,
    username,
    onClick
}) => {
  return (
    <Image src={imageUrl} height={40 * scale} width={40 * scale} alt={`${username} profile image`}
        className='rounded-full shadow-sm shadow-white cursor-pointer' onClick={onClick}/>
  )
}

export default ProfileImg