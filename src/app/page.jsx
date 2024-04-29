import Image from 'next/image'
import styles from './page.module.css'
import Illus from '/public/home-illus.svg'
import AppButton from '@/components/AppButton'

export default function Home() {
  return (
    <main className='py-10'>
      <div className="container">

        <div className={styles.container}>
          <div className={styles.description}>
            <h1 >Shareit: Connect, Create, Collaborate</h1>
            <div className='space-y-2 xl:text-lg'>
              <p className='max-md:px-[5%]'>
                Empowering you to share ideas, stories and creativity, securily across the World
              </p>
              <p>What are you waiting for ?</p>
            </div>
            <div className="w-1/3 lg:w-[140px] max-md:self-center">
              <AppButton link='/user/save' text='Save a File'/>
            </div>
          </div>
          <div className={styles.imgBox}>
            <Illus className='h-[400px] lg:h-[440px] xl:h-[500px]'/>
          </div>
        </div>

      </div>
    </main>
  )
}
