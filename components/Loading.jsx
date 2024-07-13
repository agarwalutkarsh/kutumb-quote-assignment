import { Dialog, DialogContent } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
    // Common component for loading
    return (
        <Dialog fullWidth={true} maxWidth='xs' open={true} PaperProps={{
            style: { height: '12rem', background: 'transparent', boxShadow: 'none' }
        }}>
            <DialogContent className='m-auto'>
                <Image src='/assets/icons/loader.svg' alt='Logo' width={100} height={100} />
            </DialogContent>
        </Dialog>
    )
}

export default Loading