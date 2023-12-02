'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NftCard from '../NftCard/page';

const slidesPerView = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,

      }}
      breakpoints={{
        384: {
          slidesPerView: 1,

        },
        600: {
          slidesPerView: 2,

        },
        950: {
          slidesPerView: 3,

        },
        1400: {
          slidesPerView: 4,

        }
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard />
      </SwiperSlide>
    </Swiper>
  )
}

export default slidesPerView