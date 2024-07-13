'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './ContextApi/MainContext'
import { useRouter } from 'next/navigation'

const Nav = () => {
  // Navbar
  const mainContext = useContext(MainContext)
  const router = useRouter()

  const isUserLoggedIn = mainContext.isLoggedIn ?? false

  // Logout Handler
  const logoutHandler = () => {
    localStorage.clear()
    mainContext.setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <div className='fixed bottom-0 z-50 w-full '>
      <nav className='flex-between w-full mb-0 mt-4 p-4 bg-purple-50 rounded-xl'>
        <div className='flex flex-row  justify-center'>
          <Link href='/' className='flex gap-3'>
            <Image src="/assets/images/kutumb_logo.png" alt='Logo' width={30} height={30} className='ml-8 object-contain' />
            </Link>
            {
              isUserLoggedIn &&
              <div className='flex flex-row ml-auto mr-2 w-max'>
                <Link href='/create' className='black_btn my-2 mr-2' >
                  Create
                </Link>
                <Link href='/quote-list' className='black_btn my-2 mr-2' >
                  Quotes
                </Link>
                <span className='outline_btn mr-8 w-max max-h-12 hover: cursor-pointer' onClick={logoutHandler}>Logout</span>
              </div>
            }

        </div>
      </nav>
    </div>
  )
}

export default Nav