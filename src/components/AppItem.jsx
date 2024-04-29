'use client'

import App from '@/models/app'
import { faArrowDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react'
import ProfileImg from './ProfileImg';
import CustomInput from './CustomInput';
import AppButton from './AppButton';

const AppItem = ({appModel = new App(), onClick}) => {
    const {appName, description, thumbnail, downloadTime, category} = appModel;
    console.log('thumnail', thumbnail);
    return (
        <div className="relative h-[440px] w-[300px] flex flex-col cursor-pointer 
            shadow-lg rounded-md mb-10 overflow-hidden group" onClick={onClick}>
            <figure className="relative w-full h-[55%] bg-gray-50 overflow-hidden">
                <Image src={thumbnail ?? '/empty-thumb.jpg'} fill alt={`${appName} document thumbnail`}
                    className='object-scale-down group-hover:scale-125 duration-500'/>
            </figure>
            <p className="absolute top-1/2 self-center bg-color-secondary text-color-primary px-6
                    h-[30px] flex items-center font-semibold text-sm -skew-x-12">Application</p>
            
            <div className="h-[45%]">
                <div className="py-6 px-4">
                    <p className="font-semibold text-lg text-color-primary">{appName}</p>
                    <p className="mt-3 h-[70px] text-sm line-clamp-3">
                        {description.length > 0 ? description : 'No description'}
                        
                    </p>
                    <div className="flex items-center justify-between">
                        <span className='text-sm font-semibold'>Downloads : {downloadTime ?? 0}</span>
                        <button className="outlineIconBtn group text-black hover:text-white">
                            <FontAwesomeIcon icon={faArrowDown} size='sm'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const password = 'kem.net'

export const DialogAppItem = ({appModel = new App()}) => {

    const [showDialog, setShowDialog] = useState(false)
    const {appName, description, thumbnail, downloadTime, creator, file} = appModel;
    const [searchValue, setSearchValue] = useState()

    return (
        <>
            <AppItem appModel={appModel} onClick={() => setShowDialog(true)}/>
            <div className={`${showDialog ? 'opacity-100': 'opacity-0 pointer-events-none'} 
                fixed top-0 left-0 right-0 bottom-0 z-50 duration-300`}>

                <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black/40`}
                    onClick={() => setShowDialog(false)}></div>

                <button className='absolute top-0 right-16 p-5 hover:bg-white/30' 
                    onClick={() => setShowDialog(false)}>
                    <FontAwesomeIcon icon={faClose} color='white'/>
                </button>

                <div className="absolute left-16 top-16 right-16 bottom-0 rounded-lg bg-white
                    flex space-x-14 p-7">

                    <div className="flex-[0.65] flex flex-col space-y-5">
                        <figure className="relative h-[76%]">
                            <Image src={thumbnail ?? '/empty-thumb.jpg'} fill className='object-contain'/>
                        </figure>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <ProfileImg imageUrl='/user.jpg' />
                                <div className="flex flex-col text-sm">
                                    <p className='font-semibold'>Deku Redfox</p>
                                    <p>nguemelobefirmin@gmail.com</p>
                                </div>
                            </div>
                            <p className='italic text-sm'>Downloaded {downloadTime ?? 0} Times</p>
                        </div>
                    </div>

                    <div className="flex-[0.35]">

                        <p className='text-lg font-semibold'>{appName}</p>

                        <p className='text-[16px] mt-3 mb-5'>
                            {description.length > 0 ? description : 'No description'}
                        </p>
                        
                        <form action="" className='space-y-3'>
                            <div className="border border-color-grey-soft rounded-md flex">
                                <CustomInput placeholder='Password' type='password' required
                                    onchanged={(e) => setSearchValue(e.target.value)}/>
                            </div>
                            {
                                searchValue != password ? <AppButton text='Download' className='w-full'
                                    onclick={() => alert('Incorrect password. Please contact infos@kem-net.com to get a password or suscribe')}/>
                                : <AppButton text='Download' link={file} className='w-full'/>
                            }
                            
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AppItem