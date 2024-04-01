import React from 'react'
import "./Bottom.css";

export default function Bottom() {
    return (
        <>
            <div className='Footer-bg relative'>
                <div className='footer-bg-img'>
                    <img src=".\Footer\walk-footer.png" alt="footer-bg" />
                </div>
                <div className='btm-text mx-6 pt-7 xl:hidden lg:hidden md:hidden'>
                    <p className=' text-white font-medium xl:mx-14 lg:mx-12 md:mx-10'>© 2023 Walk International. All rights reserved.</p>
                </div>
                <div className='areo'>
                    <img className='' src="./Footer/flight.png" alt="flight" />
                </div>
                <div className='btm-text hidden xl:block lg:block pt-10 md:pt-5 md:block'>
                    <p className=' text-white font-medium xl:mx-14 lg:mx-12 md:mx-10'>© 2023 Walk International. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
