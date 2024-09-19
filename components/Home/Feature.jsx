import React from 'react'
import feature_one from '@/public/image/featureOne.svg';
import feature_two from '@/public/image/featureTwo.svg';
import feature_three from '@/public/image/featureThree.svg';
import feature_four from '@/public/image/featureFour.svg';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        imgae: feature_one,
        title: "Menu Varantions",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam. Necessitatibus placeat architecto vitae.",
        Link: "Learn More"
    },
    {
        imgae: feature_two,
        title: "Cooking warw",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam. Necessitatibus placeat architecto vitae.",
        Link: "Learn More"
    },
    {
        imgae: feature_three,
        title: "Best Cheff",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam. Necessitatibus placeat architecto vitae.",
        Link: "Learn More"
    },
    {
        imgae: feature_four,
        title: "Fast Food",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam. Necessitatibus placeat architecto vitae.",
        Link: "Learn More"
    },

]
export default function Feature() {
    return (
        <div className='bg-transparent mt-20'>
            <div className='container'>
                <div className='text-center'>
                    <p className='text-pink-300 leading-tight'>FEATURES</p>
                    <h2 className='text-4xl font-bold mt-3'>Get a many of intersting <br /> features.</h2>
                </div>
                <div>
                    <div className=' grid grid-cols-1 items-center mt-36 lg:mt-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-4 text-center'>
                        {
                            features.map((feature, index) => (
                                <div key={index} className='relative md:mt-28 mb-32'>
                                    <div className='absolute -top-[150px] left-8 sm:left-8 mx-auto'>
                                        <Image src={feature.imgae} width={310} height={10} />
                                    </div>
                                    <div className='bg-gray-100 p-4'>
                                        <h2 className='text-3xl sm:text-sm font-semibold mt-10'>{feature.title}</h2>
                                        <p className='text-lg font-medium mt-5'>{feature.description}</p>
                                        <div className='pb-5'>
                                            <Link className='relative group' href={""}>{feature.Link}
                                                <p className='absolute bottom-0 right-0 mx-auto bg-red-500 h-[2px] w-full opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 ease-out'></p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
