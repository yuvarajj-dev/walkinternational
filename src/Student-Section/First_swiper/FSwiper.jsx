import React from 'react';
import Student_data from '../Student_data/StudentData';

export default function FSwiper(props) {
    return (
        <div className='lg:flex xl:flex  Student-Scroll'>
            <div className='student-bg-div  '>
                {Student_data.map((value, index) => (
                    <div className='scrolls-5'>
                        <img src={value.Student_picture_path} alt="student-photo" className='swiper-anime' />
                    </div>
                ))}
            </div> 
            <div className='student-bg-div '>
                {Student_data.map((value, index) => (
                    <div className='scrolls-1' key={index}>
                        <img src={value.Student_picture_path} alt="student-photo" className='swiper-anime' />
                    </div>
                ))}
            </div>
        </div>
    );
}
