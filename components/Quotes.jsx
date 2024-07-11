'use client'
import { getAllQuotes } from '@/ApiService/Quotes'
import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import { MainContext } from './ContextApi/MainContext'
import OverlayImage from './OverlayImage'

const Quotes = () => {
    const [quotesArr, setQuotesArr] = useState([])
    const mainContext = useContext(MainContext)
    const getQuotesFunc = () => {
        const quotes = getAllQuotes()
        quotes.then((resp) => {
            console.log(resp.data)
            setQuotesArr(resp?.data?.data)
        }).catch(err => console.error(err))
    }
    useEffect(() => {
        if (mainContext.isLoggedIn) {
            getQuotesFunc()
        }
    }, [mainContext])
    return (
        <div>
            {
                mainContext.isLoggedIn
                    ? <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            quotesArr.map((quote) => (
                                <OverlayImage quote={quote}  key={quote?.id} />
                            ))
                        }
                      
                    </div>
                    : <>
                        <Login />
                    </>
            }
        </div>
    )
}

export default Quotes