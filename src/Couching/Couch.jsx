import React from 'react';
import "./Couch.css";
import CouchSwiper from './Swiper/CouchSwiper';

export default function Couch() {


  const handleclick = (event) => {
    // Get all elements with the class 'couch-expert'
    const experts = document.querySelectorAll(".couch-expert");

    // Toggle the 'wt' class for each expert
    experts.forEach(expert => {
      if (expert === event.currentTarget) {
    
        expert.classList.toggle("wt");
      } else {
       
        expert.classList.remove("wt");
      }
    });
  };



  return (
    <>
      <div className='Couch'>
        <div className='couch-blue flex justify-center items-end h-screen'>
          <div className='couch-inside flex justify-around'>
            <div className='couch-expert wt flex gap-4 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Our-expert-coaching.svg" alt="expert" />
              <p className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-sm ">Our expert coaching</p>
            </div>
            <div className='couch-expert flex gap-4 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Loan-Partners.svg" alt="expert" />
              <p className="xl:text-xl lg:text-xl md:text-lg sm:text-lg  ">Loan Partners</p>
            </div>
            <div className='couch-expert flex gap-4 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Afflilate-Partners.svg" alt="expert" />
              <p className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-sm ">Afflilate-Partners</p>
            </div>
          </div>
        </div >
        <div className='flex justify-center items-end couch-swiper ' >
          <div className='couch-brand xl:pt-14 lg:pt-12 md:pt-16 sm:pt-8 pt-12 overflow-hidden'>
            <CouchSwiper />
          </div>
        </div>
      </div>
    </>
  )
}
