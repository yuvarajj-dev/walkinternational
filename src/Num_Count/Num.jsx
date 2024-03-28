import React from 'react';
import "./Num.css";
import Num_count from './Num_inc/Num_count';

export default function Num() {
    return (
        <>
            <div className='Num overflow-hidden  '>
                <div className=' absolute z-30 w-full lg:pb-7 flex justify-around xl:mt-20 mt-1 '>
                    <div className=' '>
                        <Num_count number={1500}   text={"Reviews across all platforms"} />
                        <Num_count number={3000}   text ={"Top admits"} />
                        <Num_count number={5000}   text={"Counselling and training"} />
                    </div>
                    <div>
                        <Num_count number={650}   text={"Universities processed"} />
                        <Num_count number={99}   text={"or higher visa success rate"}/>
                        <Num_count number={4000}   text={"Tuition fee scholarship granted"} />
                    </div>
                </div>
                <div className='xl:flex lg:flex hidden  justify-between relative z-10 '>
                    <div className='first-img'>
                        <img src=".\Num\Top-admits.jpeg" alt="Num-first" className='' />
                    </div>
                    <div className='second-img'>
                        <img src=".\Num\Top-admits02.jpeg" alt="Num-three" />
                    </div>
                </div>
                <div className='mx-auto relative z-20 center-img '>
                    <img src=".\Num\Google-reviews.png" alt="num div" className='' />
                </div>
            </div>

        </>
    )
}
