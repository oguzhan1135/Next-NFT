'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import NftCard from '@/Components/NftCard/page';
import { NftProductContext } from '@/Context/NftCardContext';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import '@/app/globals.css'
import Image from 'next/image';
import Music from '/public/images/other/music.svg'
import Domain from '/public/images/other/domain-names.svg'
import Virtual from '/public/images/other/virtual.svg'
import Utility from '/public/images/other/utulity.svg'
const BrowbyCategory = () => {
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
        1400: { slidesPerView: 6 },
        1601 : {slidesPerView: 8}
      }}

      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Music</h3>
          <Image
            src={Music}
            alt='music'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Domain Names</h3>
          <Image
            src={Domain}
            alt='Domain'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Virtual World</h3>
          <Image
            src={Virtual}
            alt='virtual'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Utulity</h3>
          <Image
            src={Utility}
            alt='utility'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Music</h3>
          <Image
            src={Music}
            alt='music'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Domain Names</h3>
          <Image
            src={Domain}
            alt='Domain'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Virtual World</h3>
          <Image
            src={Virtual}
            alt='virtual'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Utulity</h3>
          <Image
            src={Utility}
            alt='utility'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Music</h3>
          <Image
            src={Music}
            alt='music'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Domain Names</h3>
          <Image
            src={Domain}
            alt='Domain'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Virtual World</h3>
          <Image
            src={Virtual}
            alt='virtual'
            className='w-full '
          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
          <h3>Utulity</h3>
          <Image
            src={Utility}
            alt='utility'
            className='w-full '
          />
        </div>
      </SwiperSlide>


    </Swiper>
  );
};

export default BrowbyCategory;
