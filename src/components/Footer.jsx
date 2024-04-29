import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  const links = [
    {
      icon: '/facebook.png',
      url: 'facebook.com'
    },
    {
      icon: '/youtube.png',
      url: 'youtube.com'
    },
    {
      icon: '/instagram.png',
      url: 'instagram.com'
    },
    {
      icon: '/twitter.png',
      url: 'twitter.com'
    },
  ]

  return (
    <div className="h-14 bg-color-tertiary">
      <div className="container h-full">
        
        <div className='h-full flex items-center justify-between text-normal'>
          <div className='space-x-1'>
            <span>@2024</span> 
            <Link href='/' className='font-semibold text-color-primary'>Kem net Docs</Link> 
            <span>All rights reserved</span>
          </div>
          <div className='flex items-center space-x-3'>
            {
              links.map((e, index) => (
                <a key={index} href={e.url} className='cursor-pointer'>
                  <Image src={e.icon} width={24} height={24}/>
                </a>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer