'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight, faChevronLeft, faFilter, faListSquares, faDownload } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Parse from 'parse'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/Skeleton'
import { useSearchParams } from 'next/navigation'
import CustomInput from '@/components/CustomInput'
import AppItem, { DialogAppItem } from '@/components/AppItem'
import App from '@/models/app'

const PARSE_APPLICATION_ID = 'nXh5R3BpfoA8XgTy8UDFDK9A3PLZQjRnjeQxcLJv';
const PARSE_HOST_URL = 'https://appsshare.b4a.io/';
const PARSE_JAVASCRIPT_KEY = 'Y32qQkoFccyI1zaUmsUQiZqLtzJj8pvfxhzMdnxY';

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const password = 'kem.net'

export default function Page() {

  const [apps, setApps] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [searchValue, setSearchValue] = useState('')

  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const queryParam = searchParams.get('query')

  const handleSearch = (e) => {
    setSearchValue(e.value)
  }

  useEffect(() => {

    try {
      new Parse.Query(App.tableName).count().then(count => {
        const pages = Math.ceil(count / 5)
        setPageCount(pages)
      })
    } catch (error) {
      console.error('error when getting app count', error);
    }

  }, [])

  useEffect(() => {
    pageParam && setCurrentPage(Number(pageParam))

    try {
      const query = new Parse.Query(App.tableName).limit(5).skip(5 * (pageParam ? Number(pageParam) - 1 : 0))
        .descending('createdAt');
      
      if (queryParam) {
        console.log('using query param', queryParam);
        query.fullText(App.keyAppName, queryParam)
      }
      
      query.find().then(allApps => {
        const appList = allApps.map(e => App.fromJSON(e))
        setApps(appList)
      })

    } catch (error) {
      console.error('error while getting apps', error);
    }

  }, [pageParam])

  return (
    <main className='py-20'>
      <div className="container">

        <div className="flex flex-col xl:flex-row space-x-8">

          <FilterSideBar />

          <div className="flex flex-1 flex-col space-y-12">

            <div className="flex h-[45px] border rounded-md overflow-hidden">
                <CustomInput strecth bgColor='bg-transparent' placeholder='Search a document...'
                  onchanged={handleSearch}/>
                <Link href={`/apps?query=${searchValue}`} className='flex items-center justify-center w-[100px] bg-color-secondary'>
                  <span className='mr-2'>Search</span>
                  <FontAwesomeIcon icon={faSearch}/>
                </Link>
            </div>

            <div className="grid grid-cols-3 justify-between justify-items-center">
              {
                apps.map(app => <DialogAppItem key={app.id} appModel={app}/> )
              }
            </div>

            {/* {
              !posts.length > 0 &&
              Array(5).fill().map((_, index) => (
                <div key={index} className="flex flex-col md:flex-row rounded-lgoverflow-hidden">
                  <Skeleton width='flex-[0.7]'>
                    <div className="w-full aspect-[16/12]"></div>
                  </Skeleton>

                  <div className="flex-1 flex flex-col p-6">

                    <Skeleton>
                      <div className="h-8"></div>
                    </Skeleton>

                    <Skeleton width='w-1/2 mt-3'>
                      <div className='h-4'></div>
                    </Skeleton>

                    <div className="flex flex-col gap-4 mt-6">
                      <Skeleton>
                        <div className="h-6"></div>
                      </Skeleton>

                      <Skeleton>
                        <div className="h-6"></div>
                      </Skeleton>

                      <Skeleton>
                        <div className="h-6"></div>
                      </Skeleton>
                    </div>
                  </div>
                </div>
              ))
            } */}

            <div className="flex justify-center gap-4 mt-10">
              {

                currentPage > 1 &&
                <Link href={`/blog?page=${currentPage - 1}&query=${queryParam}`} className="outlineIconBtn">
                  <FontAwesomeIcon icon={faChevronLeft} size='sm' />
                </Link>
              }
              {
                Array.from(Array(pageCount).keys()).map(value => {
                  const page = value + 1
                  return (
                    <Link key={page} href={`/blog?page=${page}&query=${queryParam}`}
                      className={`outlineIconBtn ${currentPage === page ? 'active' : ''}`}>{page}</Link>
                  )
                })
              }
              {
                currentPage < pageCount &&
                <Link href={`/blog?page=${currentPage + 1}&query=${queryParam}`} className="outlineIconBtn">
                  <FontAwesomeIcon icon={faChevronRight} size='sm' />
                </Link>
              }
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}

const FilterSideBar = () => {
  
  const categories = ['Application', 'Text Document', 'PDF Document', 'Video', 'Music', 'Game', 'Other']

  return (
    <aside className='w-[220px]'>

      <p className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faFilter} size='lg'/>
        <span className='text-lg font-semibold'>Filters</span>
      </p>

      <p className="flex items-center space-x-4 mb-2 mt-5 text-gray-800">
        <FontAwesomeIcon icon={faListSquares} size='sm' />
        <span className='text-sm font-semibold'>Categories</span>
      </p>

      {
        categories.map((e, i) => (
          <Link key={i} href='currentPage + param(cat) = e' 
            className='block text-[16px] py-1 hover:bg-skeleton'>{e}</Link>
        ))
      }

      <p className="flex items-center space-x-4 mb-2 mt-5 text-gray-800">
        <FontAwesomeIcon icon={faDownload} size='sm' />
        <span className='text-sm font-semibold'>Download order</span>
      </p>

      <Link href='currentPage + param(most-saved) = true' 
            className='block text-[16px] py-1 hover:bg-skeleton'>Most downloaded</Link>

      <Link href='currentPage + param(most-saved) = false' 
            className='block text-[16px] py-1 hover:bg-skeleton'>Less downloaded</Link>

    </aside>
  )
}
