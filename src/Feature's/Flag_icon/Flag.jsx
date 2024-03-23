import React, { useEffect, useRef, useState } from 'react'
import Flag_icon from '../Flag_icon'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Flag.css"


export default function Flag(props) {
    const [flagSizes, setFlagSizes] = useState(Flag_icon.map(() => "w-h-81"));
    const [activeFlagIndex, setActiveFlagIndex] = useState(null);

    useEffect(() => {
        // Ensure ScrollTrigger is enabled
        gsap.registerPlugin(ScrollTrigger);

        const apper = gsap.utils.toArray('.country-bg-div');

        apper.forEach((val) => {
            gsap.to(val, {
                opacity: 1,
                ease: "anticipate",
                animationDuration: .5,
                scrollTrigger: {
                    trigger: val,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                },
                delay: "500ms",
            });
        });
    }, []);

    const handleClick = (country, index) => {

        const updatedFlagSizes = [...flagSizes];

        updatedFlagSizes[index] = "w-h-76";

        setFlagSizes(updatedFlagSizes);

        if (activeFlagIndex !== null && activeFlagIndex !== index) {
            updatedFlagSizes[activeFlagIndex] = "w-h-81";
            setFlagSizes(updatedFlagSizes);
        }

        setActiveFlagIndex(index);
        props.CountryData(country);

    }
    return (
        <div>
            {/* Country Flag Buttons */}
            {/* <div className='lg:flex xl:flex xl:justify-evenly lg:justify-evenly  flag-cir '>
                {
                    Flag_icon.map((val, ind) => (
                        <div className='flex gap-4'>
                            <div onClick={() => { handleClick(val.country, ind) }} className='country-bg-div rounded-full shadow mb-5  w-[81px] h-[81px] cursor-pointer bg-white flex items-center  justify-center relative  animate pop   '>
                                <div className={`${flagSizes[ind]} country-flag-div  cursor-pointer bg-white rounded-full shadow flex items-center justify-center`}>
                                    <img key={ind} src={val.path} alt={val.filename} />
                                </div>
                            </div>
                            <p onClick={() => { handleClick(val.country, ind) }} className='lg:hidden xl:hidden text-sm sm:text-lg py-2 md:py-5'>{val.country}</p>
                        </div>
                    ))
                }
            </div> */}
            <div className='lg:flex xl:flex xl:justify-evenly lg:justify-evenly flag-cir '>
                <div className='hidden lg:flex  xs:flex w-full justify-evenly'>
                    {
                        Flag_icon.map((val, ind) => (
                            <div className='flex gap-4'>
                                <div onClick={() => { handleClick(val.country, ind) }} className='country-bg-div rounded-full shadow mb-5  w-[81px] h-[81px] cursor-pointer bg-white flex items-center  justify-center relative  animate pop   '>
                                    <div className={`${flagSizes[ind]} country-flag-div  cursor-pointer bg-white rounded-full shadow flex items-center justify-center`}>
                                        <img key={ind} src={val.path} alt={val.filename} />
                                    </div>
                                </div>
                                <p onClick={() => { handleClick(val.country, ind) }} className='lg:hidden xl:hidden text-sm sm:text-lg py-2 md:py-5'>{val.country}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='lg:hidden    xs:hidden'>
                    <select onChange={(e) => { handleClick(e.target.value) }} className='block w-full border border-gray-300 rounded-md bg-white text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-gray-500'>
                        <option value='' disabled selected>Select a country</option>
                        {
                            Flag_icon.map((val, ind) => (
                                <option key={ind} value={val.country}>{val.country}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}
