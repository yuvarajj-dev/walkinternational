import React, { useState } from 'react'
import "./Middle.css"

export default function Middlesec() {
    const [address, setAddress] = useState(false)
    function Handleclick(index) {
        setAddress((preindex) => (preindex === index ? null : index))
    }
    const [links, setLinks] = useState(false)
    function Handlelinks() {
        setLinks(!links);
    }
    const [country, setCountry] = useState(false)
    function Handlecountry() {
        setCountry(!country)
    }
    return (
        <>
            <div className='Middle xl:py-16 lg:py-16 lg:px-5 xl:px-5 py-16 px-5'>
                <div className='middle-container xl:flex  lg:flex xl:justify-around lg:justify-around items-start '>
                    <div className="middle-links hidden xl:block lg:block  ">
                        <div className='flex justify-between items-center' ><p>Useful links</p> <img className='xl:hidden lg:hidden' src=".\Footer\svgexport-24.png" alt="downarrow" /></div>
                        <p>Home</p>
                        <p>Course Finder</p>
                        <p>Services</p>
                        <p>Blog</p>
                    </div>
                    <div className="middle-links mb-5 xl:hidden lg:hidden  ">
                        <div onClick={() => { Handlelinks() }} className='flex justify-between items-center' ><p>Useful links</p> <img className='xl:hidden lg:hidden' src=".\Footer\svgexport-24.png" alt="downarrow" /></div>
                        <div className={`${links ? `show` : `hidden`}`}>
                            <p>Home</p>
                            <p>Course Finder</p>
                            <p>Services</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="study-contry hidden xl:block lg:block">
                        <p>Study Abroad</p>
                        <p>Study in Canada</p>
                        <p>Study in UK</p>
                        <p>Study in Australia</p>
                        <p>Study in New Zealand</p>
                        <p>Study in Ireland</p>
                        <p>Study in France</p>
                        <p>Study in Germany</p>
                    </div>
                    <div className="study-contry xl:hidden lg:hidden">
                        <div onClick={() => { Handlecountry() }} className='flex justify-between items-center'><p>Study Abroad</p><img className='xl:hidden lg:hidden' src=".\Footer\svgexport-24.png" alt="downarrow" /></div>
                        <div className={`${country ? `show`:`hidden`}`}>
                            <p>Study in USA</p>
                            <p>Study in USA</p>
                            <p>Study in Canada</p>
                            <p>Study in UK</p>
                            <p>Study in Australia</p>
                            <p>Study in New Zealand</p>
                            <p>Study in Ireland</p>
                            <p>Study in France</p>
                            <p>Study in Germany</p>
                        </div>
                    </div>
                    <div className='Address '>
                        <div onClick={() => { Handleclick(1) }} className='HQ cursor-pointer '>
                            <div className='flex xl:items-center lg:items-center lg:justify-between justify-between items-center xl:justify-between'>
                                <p className='mt-3 font-bold' >HQ:Haddows Road </p>
                                <img className='' src=".\Footer\svgexport-24.png" alt="downarrow" />
                            </div>
                            <div className={`HQ-A ${address === 1 ? `show` : `hidden`} `}>
                                <p>47, 3rd Floor, Prestige Point, Unit 304, Haddows Rd, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600034</p>
                            </div>
                        </div>
                        <div onClick={() => { Handleclick(2) }} className='OMR cursor-pointer'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Chennai : OMR</p>
                                <img className='' src=".\Footer\svgexport-24.png" alt="downarrow" />
                            </div>
                            <div className={`HQ-A ${address === 2 ? `show` : `hidden`} `}>
                                <p>208/3, Old Mahabalipuram Road, Kamaraj Nagar, Semmancheri, Chennai, Tamil Nadu 600119</p>
                            </div>
                        </div>
                        <div onClick={() => { Handleclick(3) }} className='SRM'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Chennai : SRM University</p>
                                <img className='' src=".\Footer\svgexport-24.png" alt="downarrow" />
                            </div>
                            <div className={`HQ-A ${address === 3 ? `show` : `hidden`} `}>
                                <p>#106, 1st Floor, University Building, SRM Nagar, Kattankulathur, Chennai Tamil Nadu 603203</p>
                            </div>
                        </div>
                        <div onClick={() => { Handleclick(4) }} className='LON'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>International Office: London</p>
                                <img className='' src=".\Footer\svgexport-24.png" alt="downarrow" />
                            </div>
                            <div className={`HQ-A ${address === 4 ? `show` : `hidden`} `}>
                                <p>128 City Road London EC1V 2NX</p>
                            </div>
                        </div>
                    </div>
                    <div className='connet'>
                        <p>Connect</p>
                        <div className='flex xl:justify-between lg:justify-between justify-around items-center my-5' >
                            <div className='facebook'>
                                <img src=".\Footer\facebook.png" alt="facebook" />
                            </div>
                            <div className="instagram">
                                <img src=".\Footer\instagram.png" alt="facebook" />
                            </div>
                            <div className="linkedin">
                                <img src=".\Footer\linked in.png" alt="linked" />
                            </div>
                            <div className="youtube">
                                <img src=".\Footer\youtube.png" alt="yourtube" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
