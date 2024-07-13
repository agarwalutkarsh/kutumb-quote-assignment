import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'

const OverlayImage = ({ quote }) => {
    // Image Component

    return (
        <div className='w-max text-center text-lg font-semibold mx-auto mb-4 '>
            <div className='relative'>
                {
                    quote?.mediaUrl ? (
                        <Image
                            src={quote?.mediaUrl}
                            alt="Image with overlay"
                            width={300}
                            height={300}
                        />
                    )
                        : (
                            <div>
                                <FontAwesomeIcon className='w-52 h-52 text-gray-200' icon={faImage} />
                            </div>
                        )
                }
                <div className='absolute top-[50%] left-[50%]'>
                    <p className=' glassmorphism '>{quote?.text ?? '--'}</p>
                </div>
            </div>
            {/* Image Details */}
            <div className='text-sm text-left'>
                <p>UserName - {quote?.username ?? '--'}</p>
                <p>Created At - {moment(quote?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    )
}

export default OverlayImage