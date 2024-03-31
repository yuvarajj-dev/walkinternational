import React from 'react'
import "./Topsec.css"

export default function Topsec() {
  return (
    <>
        <div className='topsec xl:flex lg:flex justify-between xl:px-32 lg:px-32 xl:py-16 lg:py-16 md:py-10 py-10 items-center'>
                <div className='top-text md:text-center lg:text-start xl:text-start text-center md:py-4 xl:py-0 lg:py-0 py-4 '>
                    <h1>Sign up to our newsletter</h1>
                    <p>Get the latest updates and releases</p>
                </div>
                <div className='top-input xl:flex lg:flex md:flex md:justify-between sm:flex sm:justify-between '>
                    <input type="text" name="" id="" placeholder='Email Addresss' />
                    <button>SUBMIT</button>
                </div>
        </div>
    </>
  )
}
