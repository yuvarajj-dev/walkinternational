import React from 'react'
import "./Client.css"
import Clientcaro from './Carosul/Clientcaro'

function Client() {
  return (
    <>
      <div className='Client'>
        <div className='client-quation-div mx-auto relative z-30  '>
          <img src=".\Client\Quaotation.svg" alt="Quation" className='client-q absolute ' />
        </div>
        <Clientcaro />
      </div>
    </>
  )
}

export default Client
