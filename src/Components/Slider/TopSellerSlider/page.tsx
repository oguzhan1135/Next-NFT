'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/app/style.css'
import NftCard from '@/Components/NftCard/page';
import Seller from '@/Components/Seller/page';

const TopSeller = () => {
    return (
        <Swiper
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
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            <SwiperSlide>
                <Seller/>
            </SwiperSlide>
            

        </Swiper>
    )
}

export default TopSeller