'use client'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'


export const MainContext = createContext()

const MainContextWrapper = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null && token !== undefined) {
            setUserDetails({
                firstName: localStorage.getItem('firstName') ?? '',
                lastName: localStorage.getItem('lastName') ?? '',
                email: localStorage.getItem('email') ?? ''
            })
            setIsLoggedIn(true)
        }
    }, [])

    const unprotectedRoutes = ['/']

    const isUnProtectedRoute = useMemo(() => unprotectedRoutes?.includes(pathname), [pathname])

    useEffect(() => {
        if (!isUnProtectedRoute && !isLoggedIn) {
            router.push('/')
        } else {
            router.push(pathname)
        }
    }, [isLoggedIn, isUnProtectedRoute])

    const state = useMemo(() => ({
        isLoggedIn,
        userDetails,
        setIsLoggedIn,
        setUserDetails
    }), [isLoggedIn])


  return (
    <MainContext.Provider value={state}>
            {props.children}
        </MainContext.Provider>
  )
}

export default MainContextWrapper