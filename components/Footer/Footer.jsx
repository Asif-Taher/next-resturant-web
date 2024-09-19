import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='mt-32'> 
      <div className='container grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <div>
          <Image src='/image/icon.png' width={80} height={80} />
          <p className='font-semibold text-black mt-4'>Open an account in a minutes Lorem, ipsum dolor <br /> sit amet consectetur adipisicing elit. <br /> Sapiente, enim.</p>
          </div>
         <div className='flex gap-x-3 mt-4'>
          <Image src='/image/facebook.svg' width={20} height={20} className='bg-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-300' />
          <Image src='/image/insta.svg' width={30} height={30} className='bg-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-300'/>
          <Image src='/image/twitter.svg' width={30} height={30} className='bg-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-300'/>
          
         </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>Company</h2>
            <p>About</p>
            <p>Coreer</p>
            <p>Mobile</p>
            <p>Blog</p>
            <p>How we work?</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2  className='text-2xl'>Contact</h2>
            <p>Press</p>
            <p>Affiliates</p>
            <p>Hotel owners</p>
            <p>Partners</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2  className='text-2xl'>More</h2>
            <p>Recipe</p>
            <p>Chef</p>
            <p>Food</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
