'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const TopBtn = () => {

  const [isActive, setScroll] = useState(false)

  function scrollTop() {

    window.scroll({
        top: 0,
        left: 0
    })
    
  }

  useEffect(() => {
    setScroll(window.scrollY > 240)

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 240)
    })

  }, [])

  return (
    <button onClick={scrollTop} className={`${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-500
        py-3 px-4 bg-color-primary rounded-md fixed right-4 bottom-4 text-white hover:scale-75 z-50`}>
      <FontAwesomeIcon icon={faChevronUp}/>
    </button>
  )
}

export default TopBtn