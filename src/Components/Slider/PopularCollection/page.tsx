'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CollectionCard from '@/Components/Cards/CollectionCard/page';
import Loading from '@/Components/Loading/loading';
import { NftProductContext } from '@/Context/NftCardContext';
import { usePathname } from 'next/navigation';
import CollectionCardV2 from '@/Components/Cards/CollectionCardV2/page';
const PopularCollection = () => {
    const { collectionV2, collection } = NftProductContext();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5);


    }, [])
    const pathName = usePathname();
    return (
        <>
            {
                loader ? <div className="flex flex-row gap-[30px]">
                    <Loading component='collection' />
                    <Loading component='collection' />
                    <Loading component='collection' />
                </div>
                    :
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
                        {
                            pathName === "/HomepageV2" ?
                                <>
                                    {
                                        collectionV2.map((card) =>
                                            <SwiperSlide key={card.id}>
                                                <CollectionCardV2 data={card} />
                                            </SwiperSlide>
                                        )
                                    }
                                </> :
                                <>
                                    {
                                        collection.map((card) =>
                                            <SwiperSlide key={card.id}>
                                                <CollectionCard data={card} />
                                            </SwiperSlide>
                                        )
                                    }
                                </>
                        }


                    </Swiper>
            }

        </>
    )
}

export default PopularCollection
