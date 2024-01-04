'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Seller from '@/Components/Seller/page';
import { useState, useEffect } from 'react';
import Loading from '@/Components/Loading/loading';

const TopSeller = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000);


    }, [])
    return (
        <>
            {
                loader ? 
                <div className="flex flex-row gap-[30px]">
                    <Loading component='seller' />
                    <Loading component='seller' />
                    <Loading component='seller' />
                    <Loading component='seller' />
                    <Loading component='seller' />
                    <Loading component='seller' />
                </div> : <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        600: { slidesPerView: 5 },
                        960: { slidesPerView: 7 },
                        1280: { slidesPerView: 9 }
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Seller />
                    </SwiperSlide>


                </Swiper>
            }

        </>

    )
}

export default TopSeller