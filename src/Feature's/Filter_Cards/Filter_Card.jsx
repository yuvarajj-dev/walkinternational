import React from 'react';
import "./Card.css";
import Collage from './Card_Data';

export default function Filter_Card(props) {
    return (
        <>
            <div className='Card-main grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 lg:px-24 xl:px-24 px-2 lg:gap-5 xl:gap-5 py-20'>
                {
                    Collage.map((value, index) => {
                        if (value.country === props.country) {
                            return (
                                <div key={index} className="full-card bg-white flex rounded-[32px] items-center cursor-pointer my-5">
                                    <div className='first-div rounded-[32px]'>
                                        <img src={value.Collage_Image} alt={value.Collage_img_name} className='rounded-[32px]' />
                                    </div>
                                    <div className="second-div px-10 ">
                                        <div className="card-logo">
                                            <img src={value.Collage_Logo} alt={value.Collage_img_name} />
                                        </div>
                                        <div className='text-left text-neutral-800 text-xs lg:text-base font-semibold mt-2 mb-2'>
                                            <p className='mb-2'>{value.Collage_name}</p>
                                            <div className='flex gap-3 '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" fill="none">
                                                    <path fill="rgb(105, 101, 93)" d="M13.32 4.723h1.936c1.79 0 3.037 1.082 3.037 2.635V19.55c0 1.555-1.241 2.642-3.03 2.643-4.043.003-8.087.003-12.13 0-1.474-.001-2.616-.763-2.94-1.96a2.415 2.415 0 0 1-.078-.626C.11 14.88.113 10.153.109 5.427c0-.306.12-.532.437-.68C3.6 3.313 6.649 1.874 9.706.445c1.378-.645 3.129.018 3.53 1.33.058.186.078.387.08.581.01.779.004 1.557.004 2.367ZM1.417 5.847c-.005.089-.01.146-.01.203 0 4.523-.002 9.046 0 13.57 0 .865.677 1.448 1.677 1.448 4.07.002 8.139.002 12.207 0 1.046 0 1.71-.577 1.71-1.488.002-4.08.001-8.158 0-12.237 0-.137-.005-.279-.04-.412-.18-.683-.806-1.084-1.684-1.085H1.416Zm10.612-1.133c0-.787-.03-1.552.008-2.314.04-.814-.974-1.345-1.811-.941-2.214 1.068-4.45 2.101-6.676 3.15-.05.023-.096.058-.175.106h8.654v-.001Z"></path>
                                                </svg>
                                                <p className='course'>21 Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })
                }
            </div>
        </>
    )
}

