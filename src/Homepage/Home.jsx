import React, { useEffect } from 'react'
import "./Home.css"
import gsap from 'gsap'
import { Circ } from 'gsap'
import Autocomplete from './autocomplete/Autocomplete'
import Images_array from './Infinity-car/Carusel-data'


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
                <div className='block justify-evenly mx-auto lg:pt-32 xl:pt-32  pt-16'>
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
                    <marquee  >
                        <div className='flex w-52 my-10  ' >
                            {
                                Images_array.map((val, ind) => (
                                    <img src={val.path} alt={val.filename} className='mx-12' />
                                ))
                            }
                        </div>
                    </marquee>
                    <div className='flex mx-auto mt-5'>
                        <div className='flex mx-auto'>
                            <svg class="plane plane-animation" xmlns="http://www.w3.org/2000/svg" width="31" height="68" viewBox="0 0 31 68" fill="none">
                                <path class="contrail" d="M16.533 0.116638H14.1562V44.6801H16.533V0.116638Z" fill="url(#paint0_linear_1810_6439)"></path>
                                <path d="M8.29631 38.9092C9.63322 39.2028 10.9033 39.4817 12.1733 39.7605C13.1017 39.966 14.0227 40.1788 14.9586 40.3696C15.2111 40.421 15.4933 40.4137 15.7458 40.3623C17.8552 39.9146 19.9571 39.445 22.059 38.9826C22.1407 38.968 22.2224 38.9533 22.3487 38.9386C22.3487 39.6798 22.3561 40.399 22.3338 41.1182C22.3338 41.2063 22.1853 41.3163 22.0813 41.3751C20.6998 42.1383 19.3109 42.9015 17.922 43.6574C17.7438 43.7528 17.6546 43.8555 17.6546 44.0757C17.6621 46.6442 17.6546 49.2128 17.6546 51.7813C17.6546 51.8621 17.6695 51.9428 17.6844 52.0676C21.8436 50.7686 25.9732 49.4843 30.1547 48.178C30.1547 48.8238 30.1547 49.433 30.1547 50.0421C30.1547 50.453 30.2661 50.9301 30.0953 51.2456C29.9319 51.5538 29.4566 51.6933 29.1149 51.9061C25.3938 54.2325 21.6728 56.5515 17.9517 58.8705C17.7289 59.01 17.6472 59.1568 17.6546 59.4209C17.6621 62.0702 17.6621 62.7968 17.6546 65.446C17.6546 66.5689 17.0159 67.4422 16.0058 67.7504C14.4684 68.2127 12.9903 67.0972 12.9755 65.446C12.9606 63.3692 12.9755 63.2297 12.9755 61.1529C12.9755 60.5731 12.9606 59.9934 12.9755 59.4136C12.9829 59.1568 12.9012 59.0026 12.6784 58.8632C8.73452 56.4121 4.79808 53.9536 0.854207 51.5025C0.564544 51.3263 0.475417 51.1355 0.482845 50.8126C0.505126 49.9467 0.482845 49.0807 0.482845 48.178C4.64953 49.477 8.77166 50.7613 12.9383 52.0602C12.9458 51.9134 12.9606 51.796 12.9606 51.6859C12.9606 49.1688 12.9606 46.6442 12.9606 44.1271C12.9606 43.8776 12.8789 43.7455 12.6561 43.628C11.2969 42.8942 9.95259 42.1383 8.5934 41.4117C8.34088 41.2796 8.25918 41.1255 8.2666 40.8467C8.28889 40.2229 8.2666 39.5991 8.2666 38.9166L8.29631 38.9092Z" fill="white"></path>
                                <defs><linearGradient id="paint0_linear_1810_6439" x1="25.3446" y1="44.7326" x2="15.3446" y2="1.062" gradientUnits="userSpaceOnUse"><stop stop-color="#06B0EF"></stop><stop offset="0.99" stop-color="#013A8A"></stop></linearGradient></defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
