'use client'

import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading'
import { MainContext } from './ContextApi/MainContext'
import { TextField } from '@mui/material'
import { loginApi } from '@/ApiService/Auth'
// import { useRouter } from 'next/navigation';
import Link from 'next/link'


const Login = () => {
    // Login Page
    const [formBody, setFormBody] = useState({})
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false)
    // const router = useRouter()
    const mainContext = useContext(MainContext)

    // Login Function Handler
    const loginFunc = (e) => {
        e.preventDefault()
        setLoading(true)
        const resp = loginApi(formBody ?? {})
        resp.then((userResp) => {
            if (userResp.status === 200) {
                mainContext.setIsLoggedIn(true)
                localStorage.setItem('token', userResp?.data?.token)
                // router.push('/quote-list')
            } else {
                alert('Please login again')
            }
        }).catch((err) => {
            console.error(err)
        }).finally(() => setLoading(false))
    }

    // Form Change Functionality
    const handleChange = (e) => {
        setFormBody({ ...formBody, [e.target.name]: e.target.value })
    }

    const helperTextFunction = () => {
        return (
            <span className='text-xs text-blue-400 hover:cursor-pointer hover:text-blue-500' onClick={() => setShowOtp(!showOtp)}>{showOtp ? 'Hide' : 'Show'} Otp</span>
        )
    }

    return (
        <>
            {/* Loading Component */}
            {
                loading && <Loading />
            }
            {/* conditional rendering to handle different scenario of login */}
            {mainContext?.isLoggedIn ?
                <div className='flex w-[50%] mx-auto mt-20 justify-center'>
                    <Link href='/create' className='black_btn my-2 mr-8 w-1/2' >
                        Create
                    </Link>
                    <Link href='/quote-list' className='black_btn my-2 mr-8 w-1/2' >
                        Quotes
                    </Link>
                </div>
                :
                <form className='w-full md:w-[50%] m-auto my-10' onSubmit={(e) => loginFunc(e)}>
                    <TextField label='Username' value={formBody?.username ?? ''} name='username' onChange={handleChange} className='w-full' type='text' required />
                    <div className='mb-5'></div>
                    <TextField label='OTP' value={formBody?.otp ?? ''} name='otp' onChange={handleChange} className='w-full' type={showOtp ? 'text' : 'password'} required helperText={helperTextFunction()} />
                    <div className='mb-5'></div>
                    <button className='black_btn p-2 ml-[45%] hover: cursor-pointer w-max items-center' type='submit' >Login</button>
                </form>
            }
        </>
    )
}

export default Login