'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import logo from '@/public/image/logo.svg';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <div className=' bg- py-5 px-3 bg-neutral-200 sticky top-0'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center'>
          <Image className='mr-4' src={logo} width={50} height={50} alt='logo' />
          <p>Cooks kitchen</p>
        </div>
        <div className='hidden lg:flex items-center border-ring'>
          <ul className='flex items-center gap-10'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/recipe'>Recipe</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className='lg:flex lg:gap-4 items-center hidden'>
          <p className='mb-2'>phone: 016271*****</p>
          <Button className='bg-red-300 px-8 py-3 hover:bg-cyan-400 font-medium'>Login</Button>
        </div>
        {/* drower for mobile view */}
        <div className='lg:hidden'>
          <button type='button' onClick={() => setIsOpen(!isOpen)}
            className="bg-pink-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            {
              isOpen ? <RxCross2 className='text-3xl text-black' /> : <FiAlignJustify className='text-3xl text-black' />
            }
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`absolute top-14 right-0 w-[200px] transition-all duration-700
         transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <ul className='mt-7 bg-gray-400 rounded-sm py-3 px-2'>
          <li>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href='/' onClick={handleClose}>Home</Link>
          </li>
          <li>
            <Link onClick={handleClose} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href='/about'>About Us</Link>
          </li>
          <li>
            <Link onClick={handleClose} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href='/recipe'>Recipe</Link>
          </li>
          <li>
            <Link onClick={handleClose} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href='/gallery'>Gallery</Link>
          </li>
          <div>
          <Button className='bg-red-300 px-8 py-3 w-full mb-3 hover:bg-cyan-400 font-medium'>Sign In</Button>
          <Button className='bg-red-300 px-8 py-3 w-full hover:bg-cyan-400 font-medium'>Contact Us</Button>
        </div>
        </ul>
       
      </div>
    </div>
  )
}
