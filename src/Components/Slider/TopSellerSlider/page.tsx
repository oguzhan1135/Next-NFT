'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Seller from '@/Components/Seller/page';
import { useState, useEffect } from 'react';
import Loading from '@/Components/Loading/loading';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NftProductContext } from '@/Context/NftCardContext';


const TopSeller = () => {

    const { topSeller } = NftProductContext();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5);


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
                    </div> :



                    <div className="flex flex-col gap-[30px]">
                        <div className='flex justify-between w-full items-center gap-2'>
                            <h2 className='font-bold text-[36px] text-on__surface__dark dark:text-on__surface '>Top Seller</h2>
                            <div className="flex flex-row gap-4">
                                <button className='top-seller-button-prev'><FaChevronLeft /></button>
                                <button className='top-seller-button-next'><FaChevronRight /></button>
                            </div>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            navigation={{
                                nextEl: '.top-seller-button-next',
                                prevEl: '.top-seller-button-prev',
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                0: { slidesPerView: 3 },
                                600: { slidesPerView: 5 },
                                960: { slidesPerView: 7 },
                                1280: { slidesPerView: 9 },
                            }}
                            className="mySwiper"
                        >
                            {topSeller.map((card)=>
                            <SwiperSlide key={card.id}>
                                <Seller data={card}/>
                            </SwiperSlide>
                            )}
                            


                        </Swiper>

                    </div>


            }

        </>

    )
}

export default TopSeller