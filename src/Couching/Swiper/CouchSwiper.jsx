import Swiperdata from './Swiperdata';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


export default function CouchSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    Swiperdata.map((value, index) => (
                        <SwiperSlide key={index}>
                            <img src={value.Couch_swiper_path} alt={value.Couch_name} className='swiperdata' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    )
}
