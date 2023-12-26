'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import NftCard from '@/Components/NftCard/page';
import { NftProductContext } from '@/Context/NftCardContext';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';

const MySwiper = () => {
  const { nftProducts, setNftProducts } = NftProductContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

    };

    fetchData().then(() => {
      setLoading(false);
    });
  }, []);
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

      modules={[Pagination]}
      className="mySwiper"
    >
      {nftProducts.filter(card => card.sellCategory === "live").map((nftData) => (
        <SwiperSlide key={nftData.id}>
          <NftCard nftCardData={nftData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
