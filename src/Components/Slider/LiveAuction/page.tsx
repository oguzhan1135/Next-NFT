'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/app/style.css'
import NftCard from '@/Components/NftCard/page';

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
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
  );
};

export default MySwiper;
