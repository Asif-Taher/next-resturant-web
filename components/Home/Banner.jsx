import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import banner_image from '@/public/image/banner-image.png'
export default function Banner() {
  return (
    <div className=' bg-violet-200'>
     <div className='container lg:flex lg:items-center lg:justify-between w-full p-6 mx-auto'>
        <div className='lg:w-1/2'>
            <h2 className='text-5xl font-semibold mb-2'>Cook Anything with the expart</h2>
            <p className='text-sm text-opacity-0 lg:text-2xl mt-3 mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, nam quam! Saepe ipsum eaque reprehenderit fuga magnam, explicabo animi quod?</p>
            <div className='mt-4'>
                <Button className='bg-red-300 px-8 py-3 mr-4 mb-3 hover:bg-cyan-400 font-medium hover:scale-110 hover:transition-transform'>Let's Cook</Button>
                <Button className='bg-red-300 px-8 py-3 mr-4 mb-3 hover:bg-cyan-400 font-medium hover:scale-110 hover:transition-transform'>Explore now</Button>
            </div>
        </div>
        <div>
            <Image src={banner_image} width={500} height={400} alt='banner image'/>
        </div>
     </div>
    </div>
  )
}
