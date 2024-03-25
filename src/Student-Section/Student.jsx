import React from 'react'
import "./Student.css"
import FSwiper from './First_swiper/FSwiper';
import Marquee from 'react-fast-marquee';

export default function Student() {
    return (
        <>
            <div className='Student flex justify-between '>
                {/* <div className='sideStudent-left- '>
                    <h1 className='text-xl lg:text-4xl text-white font-bold xl:text-4xl '>Student results</h1>
                    <div className='Student-window'>
                        <img src="./Student-results-walk-international-min.png" alt="window" />
                    </div>
                </div> */}
                <div className='Student-right-side flex'>
                    <FSwiper />
                </div>
            </div>
        </>
    )
}
