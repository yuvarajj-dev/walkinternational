import React from 'react'
import Student_data from '../Student_data/StudentData'

export default function FSwiper() {
    return (
        <>
                {
                    Student_data.map((value, index) => (
                        <div key={index} className='student-bg-div relative w-52 -z-10  my-10 '>
                            <div className='absolute -z-10'>
                                <img src={value.Student_picture_path} alt="student-photo" />
                            </div>
                            <div className='student-bg-img-div absolute   '>
                                <p>{value.Student_picture_name}</p>
                                <p>{value.Student_courses}</p>
                                <div>
                                    <img className='w-full' src={value.Student_logo} alt="student-logo" />
                                </div>
                            </div>
                        </div>
                    ))
                }
        </>
    )
}
