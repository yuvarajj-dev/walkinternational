import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Num_count(props) {
    const countRef = useRef(null);

    const [num , setnum] = useState(props.number)

    useEffect(() => {
        gsap.utils.toArray(".number-cout").forEach(element => {
            let clean = v => (v + "").replace(/[^\d\.-]/gi, "");
            let num = clean(element.innerText);
            let decimals = (num.split(".")[1] || "").length;
            let proxy = { val: 0 };

            gsap.to(proxy, {
                val: +num,
                duration: 2,
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "restart none none none"
                },
                onUpdate: () => {
                    if (countRef.current) {
                        countRef.current.innerText = formatNumber(proxy.val, decimals);
                    }
                }
            });
        });
    }, []);

    const formatNumber = (value, decimals) => {
        let s = (+value).toLocaleString('en-US').split(".");
        return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
    };

    return (
        <>
            <div className='lg:w-56 xl:w-60 md:w-44 sm:w-36 w-28 px-3 xl:h-32 lg:h-32 md:h-24 xl:my-16 lg:my-14 md:my-11 my-8 num-count flex justify-start items-center bg-white'>
                <div>
                    <h1 ref={countRef} className='xl:text-4xl lg:text-3xl md:text-xl number-cout text-blue-400 font-bold'>{num}</h1>
                    <p className='text-black text-cout font-bold md:text-sm'>{props.text}</p>
                </div>
            </div>
        </>
    )
}

