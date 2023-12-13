'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CollectionCard from '@/Components/CollectionCard/page';
const PopularCollection = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    960: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CollectionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CollectionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CollectionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CollectionCard />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default PopularCollection