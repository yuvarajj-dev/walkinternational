import React, { useEffect, useRef, useState } from 'react'
import Flag_icon from '../Flag_icon'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Flag() {
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

    const handleClick = (index) => {

        const updatedFlagSizes = [...flagSizes];

        updatedFlagSizes[index] = "w-h-76";

        setFlagSizes(updatedFlagSizes);

        if (activeFlagIndex !== null && activeFlagIndex !== index) {
            updatedFlagSizes[activeFlagIndex] = "w-h-81";
            setFlagSizes(updatedFlagSizes);
        }

        setActiveFlagIndex(index);
    }
    return (
        <div>
            {/* Country Flag Buttons */}
            <div className='flex justify-evenly '>
                {
                    Flag_icon.map((val, ind) => (
                        <div onClick={() => { handleClick(ind) }} className='country-bg-div rounded-full shadow mb-5  w-[81px] h-[81px] cursor-pointer bg-white flex items-center  justify-center relative  animate pop   '>
                            <div className={`${flagSizes[ind]} country-flag-div  cursor-pointer bg-white rounded-full shadow flex items-center justify-center`}>
                                <img key={ind} src={val.path} alt={val.filename} />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
