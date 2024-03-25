import React from 'react'
import Course_data from '../Course_data'

export default function Cource_Card() {
    return (
        <>
            <div className='grid xl:grid-cols-5  lg:grid-cols-4  grid-cols-3'>
                {
                    Course_data.map((val, ind) => (
                        <div className='Cor-Card w-full'>
                            <div className='my-10'>
                                <img src={val.Course} alt={val.Course_icon_name} />
                                <p className="xl:text-xl my-5 lg:text-xl md:text-lg text-sm mx-auto text-center font-semibold text-black">{val.Course_icon_name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
