import React from 'react'
import "./Trusted.css"

export default function Trusted() {
    return (
        <>
            <div className='Truested py-10'>
                <div className='tuest-div xl:flex  lg:flex justify-around items-center'>
                    <div className='true-first flex justify-center items-center relative'>
                        <img src=".\Truested\Trusted-academic-institu-world.jpeg" alt="truested" className='z-20' />
                        <div className='true-name text-center font-extrabold absolute z-30 '>
                            <p className=''>Trusted by <span className='text-blue-400'>650+</span> academic institutes across the world.</p>
                        </div>
                    </div>
                    <div className='true-second'>
                        <img src=".\Truested\Trusted-by-650-plus-Universities-across-the-globe.jpeg" alt="truest-2" />
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <p className='text-xl'>Trusted by 650+ academic institutes across the world.
                        </p> */}
