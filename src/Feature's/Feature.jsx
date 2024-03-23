import React, { useState } from 'react';
import Heading from '../Common Component/Heading';
import "./Feature.css"
import Flag from './Flag_icon/Flag';
import Filter_Card from './Filter_Cards/Filter_Card';



export default function Feature() {
  const [countrydata,setcountrydata] = useState("USA")
  return (
    <>
      <div className='Feature'>
        <Heading head={"Top Featured Universities"} color={'rgb(1 53 111)'} />
        {/* Flag Icon and LInks */}
        <Flag CountryData={(C_data)=>{ setcountrydata(C_data)}} />
        {/* Flag Cards and there Images */}
        <Filter_Card country={countrydata} />
      </div>
    </>
  )
}
