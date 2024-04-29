import React from 'react'

const page = () => {
  return (
    <div>User Docs</div>
  )
}

export default page



// 'use client'

// import FlatButton from "@/components/AppButton";
// import Skeleton from "@/components/Skeleton";
// import App from "@/models/app";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import Parse from 'parse';
// import { useEffect, useState } from "react";

// const PARSE_APPLICATION_ID = 'nXh5R3BpfoA8XgTy8UDFDK9A3PLZQjRnjeQxcLJv';
// const PARSE_HOST_URL = 'https://appsshare.b4a.io/';
// const PARSE_JAVASCRIPT_KEY = 'Y32qQkoFccyI1zaUmsUQiZqLtzJj8pvfxhzMdnxY';

// Parse.initialize('nXh5R3BpfoA8XgTy8UDFDK9A3PLZQjRnjeQxcLJv', 'Y32qQkoFccyI1zaUmsUQiZqLtzJj8pvfxhzMdnxY');
// Parse.serverURL = PARSE_HOST_URL;

// export default function Home() {

//   const [apps, setApps] = useState([])
//   const [pageCount, setPageCount] = useState(0)
//   const [currentPage, setCurrentPage] = useState(1)

//   const searchParams = useSearchParams()
//   const pageParam = searchParams.get('page')
//   const queryParam = searchParams.get('query')

//   // useEffect(() => {

//   //   try {
//   //     new Parse.Query(App.tableName).count().then(count => {
//   //       const pages = Math.ceil(count / 5)
//   //       setPageCount(pages)
//   //     })
//   //   } catch (error) {
//   //     console.error('error when getting post count', error);
//   //   }

//   // }, [])

//   useEffect(() => {
//     pageParam && setCurrentPage(Number(pageParam))

//     try {
//       new Parse.Query(App.tableName).limit(5).skip(5 * (pageParam ? Number(pageParam) - 1 : 0))
//         .descending('createdAt').find().then(allApps => {
//           const appList = allApps.map(e => App.fromJSON(e))
//           setApps(appList)
//         })

//     } catch (error) {
//       console.error('error while getting apps', error);
//     }

//   }, [pageParam])

//   return (
//     <main>

//       <section className="py-20">
//         <div className="container">
//           <div className="flex flex-1 flex-col gap-12">

//             {
//               !apps.length > 0 &&
//               Array(5).fill().map((_, index) => (
//                 <div key={index} className="flex flex-col md:flex-row rounded-lgoverflow-hidden">
//                   <Skeleton width='flex-[0.7]'>
//                     <div className="w-full aspect-[16/12]"></div>
//                   </Skeleton>

//                   <div className="flex-1 flex flex-col p-6">

//                     <Skeleton>
//                       <div className="h-8"></div>
//                     </Skeleton>

//                     <Skeleton width='w-1/2 mt-3'>
//                       <div className='h-4'></div>
//                     </Skeleton>

//                     <div className="flex flex-col gap-4 mt-6">
//                       <Skeleton>
//                         <div className="h-6"></div>
//                       </Skeleton>

//                       <Skeleton>
//                         <div className="h-6"></div>
//                       </Skeleton>

//                       <Skeleton>
//                         <div className="h-6"></div>
//                       </Skeleton>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }

//             {
//               apps.map(app => {
//                 const {id, appName, description, thumbnail, downloadTime, file} = app

//                 return (
//                   <div className="flex flex-col md:flex-row rounded-lg shadeWide overflow-hidden" key={id}>
//                     <Link href={`/blog/${id}`} className="flex-[0.7] relative aspect-[16/12]">
//                       <Image src='/share.png' fill className='object-cover' alt={`thumbnail of ${appName}`} />
//                     </Link>

//                     <div className="flex-1 flex flex-col p-6 items-start">

//                       <h4 className="text-color-primary-darker hover:text-color-primary duration-500 leading-snug line-clamp-1">
//                         <Link href={`/blog/${id}`}>{appName}</Link>
//                       </h4>

//                       {/* <div className="flex gap-6 items-center py-3 text-sm">
//                         <div className="flex gap-2 items-center">
//                           <Image src={user.profile} height={20} width={20} alt={`${user.username} profile image`} />
//                           <span className='text-color-iron'>{user.username}</span>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                           <FontAwesomeIcon icon={faComment} className='text-color-primary' />
//                           <span className='text-color-iron'>{user.job}</span>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                           <FontAwesomeIcon icon={faCalendar} className='text-color-primary' />
//                           <span className='text-color-iron'>{getFormattedDate(postInfos.createdAt)}</span>
//                         </div>
//                       </div> */}

//                       <p className="text-color-iron line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
//                         {description}
//                       </p>

//                       <FlatButton text='Download' className='mt-6' link={file} external download>
//                         {/* <FontAwesomeIcon icon={faArrowRight} size='sm' className='ml-2' /> */}
//                       </FlatButton>
//                     </div>

//                   </div>
//                 )
//               })
//             }

//             <div className="flex justify-center gap-4 mt-10">
//               {

//                 currentPage > 1 &&
//                 <Link href={`/blog?page=${currentPage - 1}&query=${queryParam}`} className="pageLink">
//                   {/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}next
//                 </Link>
//               }
//               {
//                 Array.from(Array(pageCount).keys()).map(value => {
//                   const page = value + 1
//                   return (
//                     <Link key={page} href={`/blog?page=${page}&query=${queryParam}`}
//                       className={`pageLink ${currentPage === page ? 'active' : ''}`}>{page}</Link>
//                   )
//                 })
//               }
//               {
//                 currentPage < pageCount &&
//                 <Link href={`/blog?page=${currentPage + 1}&query=${queryParam}`} className="pageLink">
//                   {/* <FontAwesomeIcon icon={faChevronRight} size='sm' /> */}previous
//                 </Link>
//               }
//             </div>

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }
