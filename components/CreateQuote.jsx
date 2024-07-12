'use client'

import { createQuoteApi, getMediaUrl } from '@/ApiService/Quotes'
import { Box, TextField } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CreateQuote = () => {

    const [quoteBody, setQuoteBody] = useState({})
    const router = useRouter()

    const handleChange = (e) => {
        setQuoteBody({ ...quoteBody, [e.target.name]: e.target.value })
    }

    const createPost = (e) => {
        e.preventDefault()
        console.log(quoteBody)
        const submitDataBody = {
            text: quoteBody?.text,
            mediaUrl: quoteBody?.mediaUrl ?? ""
        }

        const createResponse = createQuoteApi(submitDataBody)
        createResponse.then(response => {
            // redirecting to dashboard after successfull creaton
            if (response?.status === 200) {
                alert('Quote created successfully!')
                setQuoteBody({})
                router.push('/')
            }
        })
    }

    const imageChangeHandler = ((e) => {
        const selectedImage = e.target.files[0]
        const formData = new FormData()
        formData.append('file', selectedImage)
        const resp = getMediaUrl(formData)
        resp.then((respData) => {
            console.log(respData?.data?.[0]?.url)
            setQuoteBody({ ...quoteBody, mediaUrl: respData?.data?.[0]?.url ?? null })
        }).catch(err => console.error(err))
    })

    return (
        <Box className='w-full max-w-full flex flex-start flex-col'>
            <p className='head_text text-left blue_gradient'>Create Quote</p>
            <p className='desc'>Create and share the interesting quotes that could make a difference</p>
            <form onSubmit={createPost} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <p className='font-satoshi font-semibold text-gray-700'>Enter Your Quote</p>
                <TextField required placeholder='Share your thought for the day'
                    name='text'
                    className='p-3'
                    onChange={handleChange}
                    multiline={true}
                    rows={10}
                    value={quoteBody?.text ?? ''} />

                <p className='font-satoshi font-semibold text-gray-700'>Select Image</p>
                <input type="file" accept="image/*" onChange={(e) => imageChangeHandler(e)} />
                {quoteBody?.mediaUrl ? <Image alt='Uploaded Image' height={200} width={200} src={quoteBody?.mediaUrl} /> : ''}

                <div className='flex flex-end gap-4'>
                    <button className='black_btn' type='submit'>Create</button>
                    <button className='outline_btn' onClick={() => setQuoteBody({})}>Reset</button>
                </div>
            </form>
        </Box>
    )
}

export default CreateQuote