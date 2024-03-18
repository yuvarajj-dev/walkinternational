import React, { useEffect } from 'react'
import "./Home.css"
import gsap from 'gsap'
import { Circ } from 'gsap'
import Autocomplete from './autocomplete/Autocomplete'


export default function Home() {

    const Search_Country = ['USA', 'Canada', 'UK', 'Austrila', 'New Zealand', 'Ireland', 'France', 'Germany'];
    const Search_Degree = ['Masters', 'Postgraduate Certificate']
    const Search_Course = ["Aerospace Engineering", 'Architecture', 'Artificial Intelligence', 'Automotive Engineering', 'Biomedical Engineering', 'Biotechnology', 'Business Analytics', 'Chemical Engineering', 'Civil Engineering', 'Law', "Business Administration",
        "Financial Accounting",
        "Human Resource Management",
        "Marketing Management",
        "Strategic Management",]
    // Number Count Increase Function
    let arrayval = [650, 8966, 8];
    useEffect(() => {
        const tal1 = document.querySelectorAll('.data');
        const tal2 = document.querySelectorAll('.data1');
        const tal3 = document.querySelectorAll('.data2');
        var counter = { var: 0 };

        arrayval.forEach((val, index) => {
            gsap.to(counter, {
                var: val,
                duration: 2,
                onUpdate: function () {
                    if (index === 0) {
                        tal1.forEach(element => {
                            element.innerHTML = numberWithCommas(Math.ceil(counter.var)) + "+";
                        });
                    } else if (index === 1) {
                        tal2.forEach(element => {
                            element.innerHTML = numberWithCommas(Math.ceil(counter.var)) + "+";
                        });
                    } else if (index === 2) {
                        tal3.forEach(element => {
                            element.innerHTML = numberWithCommas(Math.ceil(counter.var)) + "+";
                        });
                    }
                },
                ease: Circ.easeOut,
            })
        }, [arrayval])

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

    }, []);

    return (
        <>
            <div className='Hero'>

                <div className='block justify-evenly mx-auto lg:pt-32 xl:pt-32  pt-20'>
                    {/* Heaing div */}
                    <div className='hero-head-div flex justify-center text-center '>
                        <p className='text-white text-center' >Walking every step of the way with you to Global Success</p>
                    </div>
                    {/* Number Count Increase */}
                    <div className='hero-num-rais-main mt-12  mx-auto '>
                        <div className='hero-num-rais flex justify-evenly mx-auto items-center
                                    text-white  font-bold '>
                            <div className='' >
                                <p className='data'>0</p>
                                <p>Universities</p>
                            </div>
                            <div className='pl-9 border-l-2 border-blue-500'>
                                <p className='data1'>0</p>
                                <p>Programs</p>
                            </div>
                            <div className='pl-9 border-l-2 border-blue-500'>
                                <p className='data2'>0</p>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                    {/* autocomplete */}
                    <div className='autocomplete-main mx-auto lg:flex xl:flex mt-10 lg:mt-0 xl:mt-0'>
                        <div className='autocomplet-second-div'>
                            <Autocomplete arr={Search_Country} placeholder={"Search Country"} />
                        </div>
                        <div className='autocomplet-second-div'>
                            <Autocomplete arr={Search_Degree} placeholder={"Search Degree"} />
                        </div>
                        <div className='autocomplet-second-div'>
                            <Autocomplete arr={Search_Course} placeholder={"Search Course"} />
                        </div>
                        <div className='autocomplet-second-div auto-btn'>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
