import React from 'react';
import "./Cource.css";
import Heading from '../Common Component/Heading';
import Cource_Card from './Cource_Card/Cource_Card';

export default function Cource() {
    return (
        <>
            <div className='Cource'>
                <div className='xl:pl-28 lg:pl-28 pl-14'>
                    <Heading head={"Top Courses"} color={'rgb(1 53 111)'} textAlign={'start'} />
                </div>
                <div>
                    <Cource_Card />
                </div>
                <div className='py-10 flex view-all'>
                    <div className='mx-auto flex items-center gap-3'>
                        <button className='xl:text-xl lg:text-xl text-sm text-blue-900 font-semibold'>VIEW ALL</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="8" fill="none" class="rotate-0"><g clip-path="url(#arrow-down-small_svg__a)">
                            <path fill="#002147" d="M17.226 2.06c.244-.159.584-.267.705-.493.126-.239.043-.594.046-.897.003-.452 0-.186 0-.668L8.986 2.895.004.005c0
                         .676.01.6-.005 1.243-.005.24.062.382.27.516C3.113 3.58 6.142 5.49 8.986 7.313c2.686-1.722 5.557-3.524 8.24-5.253Z">
                            </path></g><defs><clipPath id="arrow-down-small_svg__a"><path fill="#fff" d="M0 7.313V0h18v7.313z"></path></clipPath></defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
