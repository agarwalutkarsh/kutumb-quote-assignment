'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MainContext } from './ContextApi/MainContext'

const Nav = () => {
  const mainContext = useContext(MainContext)
  const isUserLoggedIn = mainContext.isLoggedIn ?? false
  return (
    <nav className='flex-between w-full mb-16 mt-4 p-4 bg-purple-50 rounded-xl'>
      <div className='flex flex-row'>
        <Link href='/' className='flex gap-3'>
          <Image src="/assets/images/kutumb_logo.png" alt='Logo' width={30} height={30} className='ml-8 object-contain' />
          <p className='logo_text'>Kutumb Quotes Assignment - Utkarsh Agarwal</p>
        </Link>
        {
          !isUserLoggedIn
            ? <>
              <span className='black_btn mx-2 hover:cursor-pointer ml-auto mr-2 max-h-12' >Login</span>
            </>
            : <div className='flex ml-auto mr-2 max-h-12'>
              <Link href='/create-post' className='black_btn  mr-8' >
                Create Post
              </Link>
              <span  className='outline_btn mr-8 hover: cursor-pointer'>Logout</span>
            </div>
        }
      </div>
    </nav>
  )
}

export default Nav