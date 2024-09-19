'use client'
import React, { useState } from 'react';
import boyOne from '@/public/image/boyone.svg';
import boyTwo from '@/public/image/boytwo.svg';
import girl from '@/public/image/girl.png';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from 'next/image';

export default function ExpartChefs() {
    const chefs = [
        { image: boyOne, name: "Cavine Steven", designation: "Senior Chef" },
        { image: boyTwo, name: "shamim", designation: "junior Chef" },
        { image: boyOne, name: "kiron", designation: "junior Chef" },
        { image: girl, name: "jesmika", designation: "Senior Chef" },
        { image: boyOne, name: "shamim", designation: "junior Chef" },
        { image: girl, name: "oyona", designation: "Senior Chef" },
        { image: boyTwo, name: "Cavine Steven", designation: "Senior Chef" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3; // Number of cards to show at one time

    const nextSlide = () => {
        if (currentIndex < chefs.length - visibleCards) {
            setCurrentIndex(currentIndex + visibleCards);
        } else {
            setCurrentIndex(0); // Reset to start if at the end
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(chefs.length - visibleCards); // Go to end if at the start
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <div className="bg-pink-300 py-10">
            <div className="container mx-auto px-4">
                <div className="text-center pt-6">
                    <p className="text-red-600 font-medium mt-5">Expert Chefs</p>
                    <h2 className="text-4xl font-bold mt-5">Let's meet the expert</h2>
                </div>
                <div className="relative mt-10">
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white z-10">
                        <FaRegArrowAltCircleLeft />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white z-10">
                        <FaRegArrowAltCircleRight />
                    </button>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (75 / visibleCards)}%)` }}
                        >
                            {chefs.map((chef, index) => (
                                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                                    <Image src={chef.image} width={600} height={400} alt={chef.name} className="w-full h-auto" />
                                    <h2 className="text-center mt-4">{chef.name}</h2>
                                    <p className="text-center pb-10">{chef.designation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
