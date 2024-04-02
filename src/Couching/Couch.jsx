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
          <div className='couch-inside flex justify-between'>
            <div className='couch-expert wt flex gap-4 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Our-expert-coaching.svg" alt="expert" />
              <p className="xl:text-xl lg:text-lg md:text-sm sm:text-sm text-sm ">Our expert coaching</p>
            </div>
            <div className='couch-expert flex justify-center gap-4 p-8 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Loan-Partners.svg" alt="expert" />
              <p className="xl:text-xl lg:text-lg md:text-sm sm:text-sm text-sm  ">Loan Partners</p>
            </div>
            <div className='couch-expert flex justify-center p-8 items-center' onClick={(e) => { handleclick(e) }}>
              <img src=".\Couch\couch icon\Afflilate-Partners.svg" alt="expert" />
              <p className="xl:text-xl lg:text-lg md:text-sm sm:text-sm text-sm ">Afflilate-Partners</p>
            </div>
          </div>
        </div >
        <div className='flex justify-center items-end couch-swiper ' >
          <div className='couch-brand xl:pt-16 lg:pt-16 md:pt-12 sm:pt-12 pt-12 overflow-hidden'>
            <CouchSwiper />
          </div>
        </div>
      </div>
    </>
  )
}
