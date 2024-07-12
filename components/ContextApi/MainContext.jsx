'use client'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'


export const MainContext = createContext()

const MainContextWrapper = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const limit = 12

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null && token !== undefined) {
            console.log('working')
            setIsLoggedIn(true)
            router.push('/quote-list')
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
        setIsLoggedIn,
        limit
    }), [isLoggedIn])


    return (
        <MainContext.Provider value={state}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextWrapper