import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import cook from '@/public/image/cook.png';
import burger from '@/public/image/burger.png';

export default function Cook() {
    return (
        <div className='relative'>
            <div className='container mx-auto max-w-7xl'>
                <Image className='absolute right-0 bottom-[-30%] hidden lg:block' src={burger} height={400} width={350}/>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Image src={cook} height={808} width={635} />
                    </div>
                    <div>
                        <p className='text-red-400 text-2xl mt-10'>Cook with us</p>
                        <h2 className='text-6xl text-bold mt-3 leading-tight'>Cooking together with the expart!</h2>
                        <p className='font-medium  leading-relaxed mt-8'>Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vitae blanditiis voluptas amet rerum qui suscipit adipisci reiciendis magni magnam. consectetur adipisicing elit. At aliquid neque modi? Harum temporibus dolorem repellat deserunt natus quas, sequi atque architecto iste earum repudiandae ad quis ipsa fugiat sed sit. Fuga ducimus, temporibus ipsam modi facilis laborum excepturi deleniti eos, beatae blanditiis dolore error inventore et odit totam vero!</p>

                        <br />
                        <p className='font-medium mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci nulla officiis quaerat nihil repellendus.</p>
                        <Button className="bg-red-300 px-8 py-3 mr-4 mb-3 hover:bg-cyan-400 font-medium hover:scale-110 hover:transition-transform">Learn More</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
