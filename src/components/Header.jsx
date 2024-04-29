'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AppButton from './AppButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faDoorOpen, faDownload, faSave } from '@fortawesome/free-solid-svg-icons'
import User from '@/models/user'
import ProfileImg from './ProfileImg'
import { faFileText } from '@fortawesome/free-regular-svg-icons'

const links = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Apps',
        url: '/apps'
    },
    {
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        title: 'Blog',
        url: '/blog'
    },
    {
        title: 'Contact',
        url: '/contact'
    },
];

const userLinks = [
    {
        title: 'My Docs',
        url: '/user/docs',
        icon: faFileText
    },
    {
        title: 'Downloads',
        url: '/user/downloads',
        icon: faDownload
    },
    {
        title: 'Save a Document',
        url: '/user/save',
        icon: faSave
    },
];


const Header = () => {
    const [isActive, setScroll] = useState(false)
    const path = usePathname();
    const [onMenu, setOnMenu] = useState(false)
    const [onUserMenu, setOnUserMenu] = useState(false)
    const currentUser = new User({})

    useEffect(() => {
        setScroll(window.scrollY > 84)

        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 84)
        })

    }, [])
    return (
        <div className={`${styles.header} ${isActive ? styles.active : ''}`}>
            <div className="container h-full ">
                <Link href='/' className={styles.logo}>
                    <Image src='/logo.png' width={100} height={100} 
                        className='sm:w-[100px] sm:h-[100px] w-[85px] h-[85px]'/>
                    <span className="font-semibold sm:text-lg lg:text-xl text-color-primary -ml-5">
                        <p>Kem net Share</p>
                        <p>Apps & Docs</p>
                    </span>
                </Link>
                <div className="flex items-center h-full justify-between">
                    <div className="w-[200px] h-full"></div>
                    <div className='lg:space-x-8 space-x-5 mx-auto max-lg:hidden'>
                        {
                            links.map(link =>(
                                <Link className={`${path == link.url && 'text-color-secondary'} font-semibold max-lg:text-sm`} 
                                    key={link.id} href={link.url}>{link.title}</Link>
                            ))
                        }
                    </div>
                    <div className="flex items-center">
                        {
                            currentUser ? <>
                                <ProfileImg imageUrl='/user.jpg' username='' onClick={()=> setOnUserMenu(!onUserMenu)}/>
                                {
                                  onUserMenu && <div className="absolute top-[80px] right-4 bg-white rounded-md shadow-md min-w-[320px]
                                    ">
                                        <div className="flex flex-col items-center py-4 text-black text-sm font-semibold">
                                            <ProfileImg imageUrl='/user.jpg' username='' scale={2.2}/>
                                            <p className='mt-3'>Deku Redfox</p>
                                            <p>nguemelobefirmin@gmail.com</p>
                                        </div>
                                        {
                                            userLinks.map((link, index) => (
                                                <MenuLink key={index} title={link.title} route={link.url} currentPath={path}
                                                    decorated={false} textColor='text-black' textHover='text-gray-700' 
                                                    showArrow textActive='text-color-secondary' icon={link.icon} onClick={()=> {
                                                        if (link.url != '#') setOnMenu(false)
                                                    }}/>
                                            ))
                                        }
                                        <MenuLink title='Logout' route='#' currentPath={path}
                                            decorated={false} textColor='text-color-error' textHover='text-color-error' 
                                            showArrow icon={faDoorOpen} onClick={()=> setOnMenu(false)}/>
                                    </div>
                                }
                            </>
                            : <AppButton darkBg text='Login' className='max-sm:hidden'/>
                        }
                        <div className='lg:hidden'>
                            <FontAwesomeIcon icon={faBars} className={`text-white ml-6 text-[22px] cursor-pointer rollin`}
                            onClick={()=> {setOnMenu(!onMenu)}}/> 
                        </div>
                    </div>
                </div>   

                <div className={`xl:hidden bg-color-primary-light max-h-[305px] w-[80%] lg:w-full absolute top-full left-1/2 overflow-hidden duration-700
                    -translate-x-1/2 border-t-[3px] ${onMenu ? 'h-[80vh] border-color-primary/50 opacity-100' : 'h-0 opacity-0 -translate-y-1 border-transparent'}`}>
                    <ul className="py-2 scrollable h-full">
                        
                        {
                            !currentUser && (
                                <div className="sm:hidden">
                                    <MenuLink title='Login' route='/auth' currentPath={path}
                                        onClick={()=> setOnUserMenu(false)}/>
                                </div>
                            )
                        }

                        {
                            links.map((link, index) => (
                                <MenuLink key={index} title={link.title} route={link.url} currentPath={path}
                                    onClick={()=> {
                                        if (link.url != '#') setOnUserMenu(false)
                                    }}/>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

const MenuLink = ({
    route,
    title,
    currentPath,
    onClick,
    textColor = 'text-white',
    textHover = 'hover:text-white/80',
    textActive = 'text-gray-400',
    icon,
    showArrow = false,
    decorated = true
}) => {
    const isActive = route == currentPath

    return (
        <li className={`flex flex-col h-11 text-sm duration-200
        hover:bg-black/5 ${textColor} ${textHover}`} onClick={()=> onClick()}>

            <Link href={route} className={`${(isActive && route != '#') && textActive} 
                flex-1 flex items-center px-6 font-semibold`}>
                {icon && <FontAwesomeIcon icon={icon} className='mr-3'/>}
                <span className='flex-1'>{title}</span>
                {showArrow && <FontAwesomeIcon icon={faChevronRight}/>}
            </Link>
            {decorated && <div className="bg-color-secondary/55 mx-3 h-[1px]"></div>}
        </li>
    )
}

export default Header