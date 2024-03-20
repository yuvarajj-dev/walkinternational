import React from 'react';
import Heading from '../Common Component/Heading';
import "./Feature.css"
import Flag from './Flag_icon/Flag';



export default function Feature() {

return (
    <>
      <div className='Feature'>
        <Heading head={"Top Featured Universities"} color={'rgb(1 53 111)'} />
        <Flag />
      </div>
    </>
  )
}
