import React from 'react';
import Student_data from '../Student_data/StudentData';

export default function FSwiper(props) {
    return (
        <div>
            <div  className='student-bg-div'>
                {Student_data.map((value, index) => (
                    <img key={index}  src={value.Student_picture_path} alt="student-photo" />
                ))}
            </div>
        </div>
    );
}

