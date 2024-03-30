import React from 'react'
import "./Accordian.css"
import Heading from '../Common Component/Heading';
import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';


export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(false);
    const handleclick = (index) =>{
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
    return (
        <>
            <div className='accord py-10'>
                <div className='w-full  pt-20 pb-9  heading' >
                    <h1 className='text-xl lg:text-4xl font-bold xl:text-4xl text-center ' color='rgb(1 53 111)'>Frequently asked questions</h1>
                </div>
                <div className="Accordian ">
                    <div className='Accordian-tab'>
                        <div onClick={()=>{handleclick(1)}} className='accord-text cursor-pointer flex justify-between xl:ps-10 lg:ps-10 md:ps-10 ps-2 my-7 items-center'>
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>How long does the application process take?</p>
                            <div>
                                <svg
                                    viewBox="0 0 32 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1734_26508)">
                                        <path
                                            d="M30.6242 3.66166C31.0583 3.38 31.6625 3.18809 31.8781 2.78571C32.1027 2.36167 31.954 1.73024 31.96 1.19166C31.9661 0.386902 31.96 0.860474 31.96 0.00309328C26.5953 1.73024 21.3035 3.43262 15.9752 5.14738C10.6318 3.42643 5.35207 1.72714 0.00861344 0.00928497C0.00861349 1.21024 0.0268298 1.07405 -0.000494624 2.21929C-0.00960276 2.64643 0.108803 2.89714 0.479202 3.13548C5.53423 6.3669 10.9202 9.75928 15.9752 13C20.7509 9.93881 25.8545 6.73524 30.6242 3.66166Z"
                                            fill="#002147"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1734_26508">
                                            <rect
                                                width={13}
                                                height={32}
                                                fill="white"
                                                transform="translate(0 13) rotate(-90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`${ activeIndex === 1 ? `show`:`hidden`} xl:px-10 lg:px-10 md:px-8 sm:px-4 px-2 text-lg pb-5`} id="uniq1">
                            <p className=''>The application process for studying abroad can vary depending on the program and the university. However, it is generally a good idea to start planning at least 12 months in advance. This will give you enough time to research programs, gather the required documentation, and complete the application process.</p>
                        </div>
                    </div>
                    <div className='Accordian-tab'>
                        <div onClick={()=>{handleclick(2)}} className='accord-text cursor-pointer flex justify-between lg:ps-10 md:ps-10 ps-2 my-7 items-center'>
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>What are the academic requirements for studying abroad?</p>
                            <div>
                                <svg
                                    viewBox="0 0 32 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1734_26508)">
                                        <path
                                            d="M30.6242 3.66166C31.0583 3.38 31.6625 3.18809 31.8781 2.78571C32.1027 2.36167 31.954 1.73024 31.96 1.19166C31.9661 0.386902 31.96 0.860474 31.96 0.00309328C26.5953 1.73024 21.3035 3.43262 15.9752 5.14738C10.6318 3.42643 5.35207 1.72714 0.00861344 0.00928497C0.00861349 1.21024 0.0268298 1.07405 -0.000494624 2.21929C-0.00960276 2.64643 0.108803 2.89714 0.479202 3.13548C5.53423 6.3669 10.9202 9.75928 15.9752 13C20.7509 9.93881 25.8545 6.73524 30.6242 3.66166Z"
                                            fill="#002147"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1734_26508">
                                            <rect
                                                width={13}
                                                height={32}
                                                fill="white"
                                                transform="translate(0 13) rotate(-90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`${ activeIndex === 2 ? `show`:`hidden`} xl:px-10 lg:px-10 md:px-8 sm:px-4 px-2 text-lg pb-5`} >
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>The academic requirements for studying abroad vary depending on the program and the university. However, most programs require a minimum GPA mentioned in the program page. Some programs may also require specific coursework or test scores.</p>
                        </div>
                    </div>
                    <div className='Accordian-tab'>
                        <div onClick={()=>{handleclick(3)}} className='accord-text cursor-pointer flex justify-between lg:ps-10 md:ps-10 ps-2 my-7 items-center'>
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>Can I apply for multiple study abroad programs?</p>
                            <div>
                                <svg
                                    viewBox="0 0 32 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1734_26508)">
                                        <path
                                            d="M30.6242 3.66166C31.0583 3.38 31.6625 3.18809 31.8781 2.78571C32.1027 2.36167 31.954 1.73024 31.96 1.19166C31.9661 0.386902 31.96 0.860474 31.96 0.00309328C26.5953 1.73024 21.3035 3.43262 15.9752 5.14738C10.6318 3.42643 5.35207 1.72714 0.00861344 0.00928497C0.00861349 1.21024 0.0268298 1.07405 -0.000494624 2.21929C-0.00960276 2.64643 0.108803 2.89714 0.479202 3.13548C5.53423 6.3669 10.9202 9.75928 15.9752 13C20.7509 9.93881 25.8545 6.73524 30.6242 3.66166Z"
                                            fill="#002147"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1734_26508">
                                            <rect
                                                width={13}
                                                height={32}
                                                fill="white"
                                                transform="translate(0 13) rotate(-90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`${ activeIndex === 3 ? `show`:`hidden`} xl:px-10 lg:px-10 md:px-8 sm:px-4 px-2 text-lg pb-5`} >
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>Yes, you can apply for multiple study abroad programs. However, it is important to note that each program has its own application deadline. So, you will need to carefully plan your application schedule.</p>
                        </div>
                    </div>
                    <div className='Accordian-tab'>
                        <div onClick={()=>{handleclick(4)}} className='accord-text cursor-pointer flex justify-between lg:ps-10 md:ps-10 ps-2 my-7 items-center'>
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>Can I defer my admission to a later term?</p>
                            <div>
                                <svg
                                    viewBox="0 0 32 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1734_26508)">
                                        <path
                                            d="M30.6242 3.66166C31.0583 3.38 31.6625 3.18809 31.8781 2.78571C32.1027 2.36167 31.954 1.73024 31.96 1.19166C31.9661 0.386902 31.96 0.860474 31.96 0.00309328C26.5953 1.73024 21.3035 3.43262 15.9752 5.14738C10.6318 3.42643 5.35207 1.72714 0.00861344 0.00928497C0.00861349 1.21024 0.0268298 1.07405 -0.000494624 2.21929C-0.00960276 2.64643 0.108803 2.89714 0.479202 3.13548C5.53423 6.3669 10.9202 9.75928 15.9752 13C20.7509 9.93881 25.8545 6.73524 30.6242 3.66166Z"
                                            fill="#002147"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1734_26508">
                                            <rect
                                                width={13}
                                                height={32}
                                                fill="white"
                                                transform="translate(0 13) rotate(-90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`${ activeIndex === 4 ? `show`:`hidden`} xl:px-10 lg:px-10 md:px-8 sm:px-4 px-2 text-lg pb-5`} >
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>Yes, you may be able to defer your admission to a later term. However, this is not always possible and it will depend on the program and the university. You should contact the program directly to inquire about their deferral policy.</p>
                        </div>
                    </div>  
                    <div className='Accordian-tab last'>
                        <div onClick={()=>{handleclick(5)}} className='accord-text cursor-pointer flex justify-between lg:ps-10 md:ps-10 ps-2 my-7 items-center'>
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>How can you assist me with my application documents</p>
                            <div>
                                <svg
                                    viewBox="0 0 32 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1734_26508)">
                                        <path
                                            d="M30.6242 3.66166C31.0583 3.38 31.6625 3.18809 31.8781 2.78571C32.1027 2.36167 31.954 1.73024 31.96 1.19166C31.9661 0.386902 31.96 0.860474 31.96 0.00309328C26.5953 1.73024 21.3035 3.43262 15.9752 5.14738C10.6318 3.42643 5.35207 1.72714 0.00861344 0.00928497C0.00861349 1.21024 0.0268298 1.07405 -0.000494624 2.21929C-0.00960276 2.64643 0.108803 2.89714 0.479202 3.13548C5.53423 6.3669 10.9202 9.75928 15.9752 13C20.7509 9.93881 25.8545 6.73524 30.6242 3.66166Z"
                                            fill="#002147"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1734_26508">
                                            <rect
                                                width={13}
                                                height={32}
                                                fill="white"
                                                transform="translate(0 13) rotate(-90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`${ activeIndex === 5 ? `show`:`hidden`} xl:px-10 lg:px-10 md:px-8 sm:px-4 px-2 text-lg pb-5`} >
                            <p className='text-sm xl:text-xl lg:text-xl md:text-lg'>We'll assist you with your application documents by providing you with information about the required documentation and by helping you to proofread and edit your application essays and letters of recommendation.</p>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}
