import React from 'react'
import "./Navbar.css"


export default function Navbar() {
    return (
        <>
            <div className="navbar bg-white text-neutral-content flex justify-between ">
                <div className='nav-logo hidden lg:block'>
                    <img src=".\Navbar\Logo.png" alt="Logo" />
                </div>
                <div className='nav-logo res lg:hidden'>
                    <img src="./Favicon.svg" alt="logo-res" className='logo' />
                </div>

                <div className='Nav-text-div gap-12'>
                    <div className='list-div  hidden xl:flex lg:flex'>
                        <ul className='text-black flex gap-5 '>
                            <li className='flex gap-1 items-center cursor-pointer '>Study Abroad <img src=".\Navbar\dowm-arrow.png" alt="arrow" className='darrow' /> </li>
                            <li className='cursor-pointer'>Course Finder</li>
                            <li className='flex gap-1 items-center cursor-pointer'>Test Prep <img src=".\Navbar\dowm-arrow.png" alt="arrow" className='darrow' /> </li>
                            <li className='cursor-pointer'>Services</li>
                        </ul>
                    </div>
                    <div className="navbar-sec-div pl-10 lg:pl-5 lg:h-20 xl:h-20 h-10 flex">
                        <div className='nav-left-div flex lg:gap-5 xl:gap-5 gap-3 items-center'>
                            <div className='sign-div flex gap-3 lg:gap-0 xl:gap-2 items-center cursor-pointer'>
                                <img src=".\Navbar\Person-icon.png" alt="person" />
                                <p className='hidden xl:block'>Sign in</p>
                            </div>
                            <div className='cursor-pointer hidden xl:block'>
                                <button className='Nav-btn'>Get Started</button>
                            </div>
                            <div className='flex lg:hidden xl:hidden nav-icon'>
                                <img src="./Navbar/nav-ham.png" alt="nav-icon" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
