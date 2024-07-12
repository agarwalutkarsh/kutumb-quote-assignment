'use client'

import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading'
import { MainContext } from './ContextApi/MainContext'
import { TextField } from '@mui/material'
import { loginApi } from '@/ApiService/Auth'
import { useRouter } from 'next/navigation';


const Login = () => {
    const [formBody, setFormBody] = useState({})
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const mainContext = useContext(MainContext)

    const loginFunc = (e) => {
        e.preventDefault()
        setLoading(true)
        const resp = loginApi(formBody ?? {})
        resp.then((userResp) => {
            console.log(userResp)
            mainContext.setIsLoggedIn(true)
            localStorage.setItem('token',userResp?.data?.token)
        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }

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
            {
                loading && <Loading />
            }
            <form className='w-full md:w-[50%] m-auto my-10' onSubmit={(e) => loginFunc(e)}>
                <TextField label='Username' value={formBody?.username ?? ''} name='username' onChange={handleChange} className='w-full' type='text' required />
                <div className='mb-5'></div>
                <TextField label='OTP' value={formBody?.otp ?? ''} name='otp' onChange={handleChange} className='w-full' type={showOtp ? 'text' : 'password'} required helperText={helperTextFunction()} />
                <div className='mb-5'></div>
                <button className='black_btn p-2 ml-[45%] hover: cursor-pointer w-max items-center' type='submit' >Login</button>
            </form>
        </>
    )
}

export default Login