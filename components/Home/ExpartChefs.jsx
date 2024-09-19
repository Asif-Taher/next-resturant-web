'use client'
import React, { useState } from 'react'
import boyOne from '@/public/image/boyone.svg'
import boyTwo from '@/public/image/boytwo.svg'
import girl from '@/public/image/girl.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from 'next/image';

export default function ExpartChefs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCarts = 3;


    const nextSlider = () => {
        console.log('click is nextslider')
        setCurrentIndex((prevIndex)=>
            prevIndex === chefs.length - 1 ? 0 : prevIndex + 1
        );
    }
    const prevslider = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? chefs.length - 1 : prevIndex - 1
        );
    };
    
    const chefs = [
        {
            image: boyOne,
            name: "Cavine Steven",
            designation: "Senior Chef"
        },
        {
            image: boyTwo,
            name: "shamim",
            designation: "junior Chef"
        },
        {
            image: boyOne,
            name: "kiron",
            designation: "junior Chef"
        },
        {
            image: girl,
            name: "jesmika",
            designation: "Senior Chef"
        },
        {
            image: boyOne,
            name: "shamim",
            designation: "junior Chef"
        },
        {
            image: girl,
            name: "oyona",
            designation: "Senior Chef"
        },
        {
            image: boyTwo,
            name: "Cavine Steven",
            designation: "Senior Chef"
        },
    ]
    return (
        <div className='bg-pink-300'>
            <div className='container'>
                <div className='text-center pt-6'>
                    <p className='text-red-600 font-medium mt-5'>Expert Chefs</p>
                    <h2 className='text-4xl font-bold mt-5'>Let's meet the expert</h2>
                </div>
                <div className='relative'>
                    <button onClick={prevslider} className='absolute z-10 left-0 top-1/2 hover:text-red-500 hover:scale-125 hover:duration-1000 text-4xl text-white'>
                        <FaRegArrowAltCircleLeft />
                    </button>
                    <button onClick={nextSlider} className='absolute right-0 top-1/2 z-10 hover:text-red-500 hover:scale-125 hover:duration-1000 text-4xl text-white'>
                        <FaRegArrowAltCircleRight />
                    </button>
                    <div className='flex items-center overflow-hidden'>
                        {
                            chefs.map((chef, index) => (
                                <div key={index} className={`transition-transform duration-500 mx-auto ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'hidden'} w-[400px]`}

                                >
                                    <Image src={chef.image} alt='chef' width={600} height={400} className='w-full h-auto' />
                                    <h2 className='text-center'>{chef.name}</h2>
                                    <p className='text-center pb-10'>{chef.designation}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}