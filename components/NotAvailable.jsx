import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotAvailable = () => {
    return (
        <div className='flex mx-auto  w-[50%] justify-center'>
            <FontAwesomeIcon icon={faQuoteLeft} className='w-10 h-10 md:w-32 md:h-32 lg:w-64 lg:h-64 mt-10 text-gray-300 m-auto' />
            <p className='text-gray-300 mt-10 text-center text-xl md:text-2xl lg:text-4xl'>No Available Quotes</p>
            <FontAwesomeIcon icon={faQuoteRight} className='w-10 h-10 md:w-32 md:h-32 lg:w-64 lg:h-64 mt-10 text-gray-300 m-auto' />
        </div>
    )
}

export default NotAvailable