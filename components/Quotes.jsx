'use client'
import { getAllQuotes } from '@/ApiService/Quotes'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './ContextApi/MainContext'
import OverlayImage from './OverlayImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import NotAvailable from './NotAvailable'


const Quotes = () => {
    const [quotesArr, setQuotesArr] = useState([])
    const [page, setPage] = useState(1)
    const [downPageDisabled, setDownPageDisabled] = useState(false)
    const [upPageDisabled, setUpPageDisabled] = useState(false)
    const mainContext = useContext(MainContext)
    const getQuotesFunc = () => {
        const quotes = getAllQuotes(page)
        quotes.then((resp) => {
            if (resp.status === 200) {
                setQuotesArr(resp?.data?.data)
            }
        }).catch(err => console.error(err))
    }
    useEffect(() => {
        if (mainContext.isLoggedIn) {
            getQuotesFunc()
        }
    }, [mainContext, page])


    const pageDown = () => {
        if (page !== 1) {
            setPage((prevPage) => prevPage - 1)
        }
    }

    const pageUp = () => {
        setPage((prevPage) => prevPage + 1)
    }

    useEffect(() => {
        setDownPageDisabled(page === 1)
        setUpPageDisabled(quotesArr?.length === 0)
    }, [quotesArr, page])

    return (
        <div>

            {

                mainContext?.isLoggedIn
                    ? <>
                        <div className='flex w-full justify-center  mt-4'>
                            <button disabled={downPageDisabled} onClick={pageDown}><FontAwesomeIcon icon={faArrowAltCircleLeft} className={`mr-2 w-5 h-5 mt-1 ${downPageDisabled ? 'text-gray-400' : 'text-orange-400'}`} /></button>
                            <p className='my-auto'>{page}</p>
                            <button disabled={upPageDisabled} onClick={pageUp}><FontAwesomeIcon icon={faArrowAltCircleRight} className={`ml-2 w-5 h-5 mt-1 ${upPageDisabled ? 'text-gray-400' : 'text-orange-400'}`} /></button>
                        </div>
                        <div className='mt-5 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                quotesArr?.map((quote) => (
                                    <OverlayImage quote={quote} key={quote?.id} />
                                ))
                            }

                        </div>
                        {
                            quotesArr?.length === 0 && <NotAvailable />
                        }
                    </>
                    : <>
                        {/* <Login /> */}
                    </>
            }
        </div>
    )
}

export default Quotes