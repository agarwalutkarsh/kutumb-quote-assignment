import React from 'react'
import Image from 'next/image'
import '@/styles/images.module.css'
import moment from 'moment'

const OverlayImage = ({quote}) => {
    console.log(quote)
    // const quote = {
    //     id: 2,
    //     username: "sandy",
    //     text: "testing",
    //     mediaUrl: "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
    //     createdAt: "2024-06-24T14:02:40.000Z",
    //     updatedAt: "2024-06-24T14:02:40.000Z"
    // }
    return (
        <div className='w-max text-center text-lg font-semibold mx-4 mb-4'>
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
                        <p>No Image Available</p>
                    )
                }
                <div className='absolute z-50 top-[50%] left-[50%]'>
                    <p>{quote?.text ?? '--'}</p>
                </div>
            </div>
            <div className='text-sm text-left'>
                <p>UserName - {quote?.username ?? '--'}</p>
                <p>Created At - {moment(quote?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    )
}

export default OverlayImage