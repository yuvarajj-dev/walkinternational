import React from 'react'
import Heading from '../Common Component/Heading'
import "./Country.css"
import Countrys from './Country _data'

export default function Country() {
  return (
    <>
      <div className='Country-main-div'>
        <Heading head={"Explore The Top Universities <br> By Country"} color={'rgb(1 53 111)'} />
        <div className='pb-36'>
          <div className='text-center grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-2 '>
            {
              Countrys.map((val, ind) => (
                <div key={ind}>
                  <img src={`${val.path}`} alt={`${val.filename}`} />
                  <p className='country-para '>{val.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}
