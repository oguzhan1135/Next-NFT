'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { NftProductContext } from '@/Context/NftCardContext';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import '@/app/globals.css'
import Loading from '@/Components/Loading/loading';
import BrowCategoryCard from '@/Components/Cards/BrowCategoryCard/page';
const BrowbyCategory = () => {
  const [loader, setLoader] = useState(true);
  const { browbyCategoryCards } = NftProductContext();
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);


  }, [])
  return (
    <>
      {
        loader ? <div className="flex flex-row gap-[30px]">
          <Loading component='category' />
          <Loading component='category' />
          <Loading component='category' />
          <Loading component='category' />
          <Loading component='category' />
          <Loading component='category' />
        </div> :
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1400: { slidesPerView: 6 },
              1601: { slidesPerView: 8 }
            }}

            modules={[Pagination]}
            className="mySwiper"
          >
            {browbyCategoryCards.map((card) =>
              <SwiperSlide key={card.id}>
                <BrowCategoryCard data={card} />
              </SwiperSlide>
            )}



          </Swiper>
      }
    </>


  );
};

export default BrowbyCategory;
