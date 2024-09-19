import Image from 'next/image'
import React from 'react'

export default function OurGellary() {
  return (
    <div className='container'> 
        <p className='text-red-400 mt-4 text-center'>Our Gallery</p>
        <h2 className='text-4xl font-bold mb-5 text-center'>Gallery of our cooked food</h2>
        <div className='grid grid-cols-1 max-[300px]'>
            <div className='flex justify-center'>
                <div>
                <div className='overflow-hidden'>
                    <Image src='/image/chicken1.jpg' width={500} height={350} alt='chicken' className='w-full lg:h-[500px]  mb-5 rounded-lg hover:scale-125 transition-transform duration-500'/>
                </div>
                <div className='grid grid-cols-2 gap-x-4 gap-y-5'>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken3.jpg' width={500} height={350} alt='chicken' className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken5.jpg' width={500} height={350} alt='chicken'className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken4.jpg' width={500} height={350} alt='chicken'className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken5.jpg' width={500} height={350} alt='chicken'className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken6.jpg' width={500} height={350} alt='chicken'className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                    <Image src='/image/chicken7.jpg' width={500} height={350} alt='chicken'className=' rounded-lg hover:scale-125 transition-transform duration-500' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
