import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import Client_data from '../Clientdata';



export default function Clientcaro() {
    return (
        <>
            <Swiper pagination={{
                dynamicBullets: true,
            }}
                modules={[Pagination,Autoplay,Navigation]}
                className="mySwiper"
                loop={100}
                navigation={true}
                Autoplay={{
                    delay: 250,
                    disableOnInteraction: false,
                  }}
            >
                {
                    Client_data.map((val, ind) => (
                        <SwiperSlide>
                            <div key={ind} className="client-car-main relative -top-16 my-10">
                                <div className='client-car ' >
                                    <div className='client-img mx-auto mt-16'>
                                        <img src={val.Client_path} alt={val.Client_name} />
                                    </div>
                                    <div className='client-name text-center my-3 text-white xl:text-xl lg:text-xl md:text-lg text-sm'>
                                        <p>{val.Client_name}</p>
                                    </div>
                                </div>
                                <div className='client-dis text-center mx-auto text-white  xl:text-xl lg:text-xl md:text-lg text-sm'>
                                    <p>{val.Client_dis}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}


