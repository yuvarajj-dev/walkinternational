import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Num_count(props) {
    const countRef = useRef(null);
    const [num, setNum] = useState(props.number);

    useEffect(() => {
        gsap.to(countRef.current, {
            duration: 12,
            innerText: props.number,
            scrollTrigger: {
                trigger: countRef.current,
                toggleActions: "restart none none none"
            },
            onUpdate: () => {
                countRef.current.textContent = formatNumber(num);
            }
        });
    }, [num]);
    
    const formatNumber = (value) => {
        let s = (+value).toLocaleString('en-US');
        return s;
    };  

    return (
        <>
            <div className='lg:w-56 xl:w-60 md:w-44 sm:w-36 w-28 px-3 xl:h-32 lg:h-32 md:h-24 xl:my-16 lg:my-14 md:my-11 my-8 num-count flex justify-start items-center bg-white'>
                <div>
                    <h1 ref={countRef} className='xl:text-4xl lg:text-3xl md:text-xl number-cout num-text font-bold'>{num}</h1>
                    <p className='text-black text-cout font-bold md:text-sm'>{props.text}</p>
                </div>
            </div>
        </>
    )
}

