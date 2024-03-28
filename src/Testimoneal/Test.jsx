import React from 'react'
import "./Test.css"
import Heading from '../Common Component/Heading';
import Testm from './Testdata/Test_data';

export default function Test() {
    return (
        <>
            <div className="Test">
                <Heading head={"Over 1000+ people trust us"} color={'rgb(1 53 111)'} />
                <div className="test-card-main  grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center">
                    {
                        Testm.map((val, ind) => (
                            <div key={ind} className="test-card flex flex-col items-center ">
                                <div>
                                    <img src={val.test_path} alt={val.test_name} className='test-person' />
                                </div>
                                <div className='flex  gap-4 relative -top-20 -left-4'>
                                    <div className='flag-div '>
                                        <img src=".\Testimoneal\usa_flag.png" alt="flag" />
                                    </div>
                                    <div className='flag-text'>
                                        <p className='xl:text-xl lg:text-xl font-bold text-white '>{val.test_Name}</p>
                                        <p className= 'text-white'>{val.test_contry}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
