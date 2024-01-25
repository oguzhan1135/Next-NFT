'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import NftCard from '@/Components/Cards/NftCard/page';
import { NftProductContext } from '@/Context/NftCardContext';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Loading from '@/Components/Loading/loading';

const MySwiper = () => {
  const { nftProducts, setNftProducts } = NftProductContext();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);


  }, [])
  return (

    <>
    {
      loader ? <div className=" flex flex-row gap-[30px]">
        <Loading component='nft-card'/>
        <Loading component='nft-card'/>
        <Loading component='nft-card'/>
      </div>
      :
       <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1280: { slidesPerView: 3 }
      }}

      modules={[Pagination]}
      className="mySwiper"
    >
      {nftProducts.filter(card => card.sellCategory === "live").map((nftData) => (
        <SwiperSlide key={nftData.id}>
                <NftCard nftCardData={nftData} isListView={false} />
          
         
        </SwiperSlide>
      ))}
    </Swiper>
    }
   
    </>
    
  );
};

export default MySwiper;
