import Image from 'next/image'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export default function NewsLater() {
  return (
    <div className='container mt-20'>
     <div className='relative bg-orange-400 h-[400px] lg:pl-32 pl-10  lg:rounded-tr-full rounded-md'>
        <h3 className='pt-20 ls-51 text-lg font-normal text-white mb-3'>Newsletter</h3>
        <h2 className='text-4xl lg:text-5xl text-white font-medium mb-5'>Subscribe Our <br />
        Newsletter
        </h2>
        <div className='relative'>
            <input type="email" placeholder='@ enter your email' className='border-blue-500 h-11 w-auto p-4 rounded-full'/>
                <button className='absolute top-2 left-[207px]'><FaArrowAltCircleRight className='text-3xl' /></button>
        </div>

        {/* right section */}
        <div>
            <div className='absolute lg:-top-14 md:top-0 right-0'>
                <Image src='/image/soup.svg' width={500} height={450} className='hidden lg:block md:block'/>
            </div>
            <div className='absolute top-[60%] left-[45%]'>
                <Image src='/image/onion.svg' width={400} height={350} className='hidden lg:block'/>
            </div>
            <div className='absolute top-[35%] -right-[150px]'>
                <Image src='/image/lettuce.svg' width={400} height={350} className='hidden lg:block'/>
            </div>
        </div>

     </div>
    </div>
  )
}
