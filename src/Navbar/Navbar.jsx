import React, { useState } from 'react'
import "./Navbar.css"



export default function Navbar() {
    const [hide, sethide] = useState(false);
    const NavClick = () => {
        sethide(!hide);
    }

    const [visbile, setvisbile] = useState(false);
    const Dropdown = () => {
        setvisbile(!visbile);
    }
    const closeDropdown = () => {
        setvisbile(false);
    }

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
                    <div className='list-div  hidden md:block xl:flex lg:flex'>
                        <ul className='text-black hidden lg:flex xl:flex gap-5 
                        '>
                            <li className="flex gap-1 items-center cursor-pointer">
                                <div className="dropdown" onClick={Dropdown}>
                                    <div tabIndex={0} role="button" className="btn"> Study Abroad <img src="./Navbar/dowm-arrow.png" alt="arrow" className="darrow" /></div>
                                    <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 ${visbile ? 'block' : 'hidden'}`}>
                                        <li><a onClick={closeDropdown}>USA</a></li>
                                        <li><a onClick={closeDropdown}>Canada</a></li>
                                        <li><a onClick={closeDropdown}>UK</a></li>
                                        <li><a onClick={closeDropdown}>Australia</a></li>
                                        <li><a onClick={closeDropdown}>New Zealand</a></li>
                                        <li><a onClick={closeDropdown}>Ireland</a></li>
                                        <li><a onClick={closeDropdown}>France</a></li>
                                        <li><a onClick={closeDropdown}>Germany</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='cursor-pointer'>Course Finder</li>
                            <li className="flex gap-1 items-center cursor-pointer">
                                <div className="dropdown" onClick={Dropdown}>
                                    <div tabIndex={0} role="button" className="btn">Test Prep <img src="./Navbar/dowm-arrow.png" alt="arrow" className="darrow" /></div>
                                    <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 ${visbile ? 'block' : 'hidden'}`}>
                                        <li><a onClick={closeDropdown}>IELTS</a></li>
                                        <li><a onClick={closeDropdown}>TOFEL</a></li>
                                        <li><a onClick={closeDropdown}>PTE</a></li>
                                        <li><a onClick={closeDropdown}>GMAT</a></li>
                                        <li><a onClick={closeDropdown}>GRE</a></li>
                                        <li><a onClick={closeDropdown}>SAT</a></li>
                                    </ul>
                                </div>
                            </li>
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
                            <div className='flex lg:hidden xl:hidden nav-icon cursor-pointer' onClick={() => { NavClick() }}>
                                <img src="./Navbar/nav-ham.png" alt="nav-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Responsive Navbar */}
            <div className={`list-div-res   bg-white xl:hidden lg:hidden ${hide ? '' : 'hidden'}`}>
                <ul className='text-black  
                        '>
                    <li className='flex list-res cursor-pointer '>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" onClick={()=>{Dropdown()}} className="btn"> Study Abroad <img src=".\Navbar\dowm-arrow.png" alt="arrow" className='darrow' /></div>
                            <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 ${visbile ? 'block' : 'hidden'}`}>
                                <li><a onClick={closeDropdown}>USA</a></li>
                                <li><a onClick={closeDropdown}>Canada</a></li>
                                <li><a onClick={closeDropdown}>UK</a></li>
                                <li><a onClick={closeDropdown}>Australia</a></li>
                                <li><a onClick={closeDropdown}>New Zealand</a></li>
                                <li><a onClick={closeDropdown}>Ireland</a></li>
                                <li><a onClick={closeDropdown}>France</a></li>
                                <li><a onClick={closeDropdown}>Germany</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='cursor-pointer list-res'>Course Finder</li>
                    <li className='flex gap-1 items-center list-res cursor-pointer'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" onClick={()=>{Dropdown()}} className="btn">Test Prep <img src=".\Navbar\dowm-arrow.png" alt="arrow" className='darrow' /></div>
                            <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 ${visbile ? 'block' : 'hidden'}`}>
                                <li><a onClick={closeDropdown}>IELTS</a></li>
                                <li><a onClick={closeDropdown}>TOFEL</a></li>
                                <li><a onClick={closeDropdown}>PTE</a></li>
                                <li><a onClick={closeDropdown}>GMAT</a></li>
                                <li><a onClick={closeDropdown}>GRE</a></li>
                                <li><a onClick={closeDropdown}>SAT</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='cursor-pointer list-res'>Services</li>
                </ul>
            </div>
        </>
    )
}
