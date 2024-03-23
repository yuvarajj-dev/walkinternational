import React from 'react'
import Heading from '../Common Component/Heading';
import "./Student.css"
import FSwiper from './First_swiper/FSwiper';

export default function Student() {
    return (
        <>
            <div className='bg-blue-800 Student'>
                <div className='flex Student-main  w-full  px-20'>
                    <div className='Student-first block w-1/2 mx-auto'>
                        <p className='text-xl py-16 lg:text-4xl font-bold xl:text-4xl text-white'>Student Results</p>
                        <img src=".\Student-results-walk-international-min.png" alt="Student" className='w-full' />
                    </div>
                    <div className='w-1/2 flex overflow-hidden'>
                        <div className='Student-swiper  w-1/2 '>
                            <marquee behavior="scroll" direction="up" scrollamount='7' loop='50'>
                                <FSwiper />
                            </marquee>
                        </div>
                        <div className='Student-swiper w-1/2  '>
                            <marquee behavior="scroll" direction="down" scrollamount='7' loop='50'>
                                <FSwiper />
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
