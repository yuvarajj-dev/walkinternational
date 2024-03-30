import React from 'react'
import Heading from '../Common Component/Heading';
import "./Hori.css"


export default function Horizondal() {
    return (
        <>
            <div className='flight'>
                <Heading head={"From Vision to Reality"} color={'rgb(1 53 111)'} />
                <div className='flight-img'>
                    <img src=".\Horizontal\svgexport-17.svg" alt="hori" />
                </div>
            </div>
        </>
    )
}
