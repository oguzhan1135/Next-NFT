'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaHeart, FaCheck } from 'react-icons/fa';
import { NftProductContext } from '@/Context/NftCardContext';
interface Collection {
    id: number;
    cardName: string;
    createrAvatar: string;
    createrName: string;
    like: number;
    collectOne: string;
    collectTwo: string;
    collectThree: string;
    collectFour: string;
}
interface DataProps {
    data: Collection
}

const CollectionCardV2: React.FC<DataProps> = ({ data }) => {
    const { collectionV2, setCollectionV2 } = NftProductContext()
    const [liked, setLiked] = useState(false);
    const likeCounter = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const updatedNftProducts = [...collectionV2];
        const findProductIndex = updatedNftProducts.findIndex(product => product.id === data.id);

        if (!liked) {
            setLiked(true);

            if (findProductIndex !== -1) {
                updatedNftProducts[findProductIndex] = {
                    ...updatedNftProducts[findProductIndex],
                    like: data.like + 1
                };
                setCollectionV2(updatedNftProducts);
            }
        } else {
            setLiked(false)
            if (findProductIndex !== -1) {
                updatedNftProducts[findProductIndex] = {
                    ...updatedNftProducts[findProductIndex],
                    like: data.like - 1
                };
                setCollectionV2(updatedNftProducts);
            }
        }
    }
    return (
        <>
            <div className='flex flex-col gap-3 bg-on__surface shadow-nft-card dark:bg-black__write p-5 w-full  rounded-[20px]' >
                <div className="flex flex-col gap-3">
                    <div className="w-full overflow-hidden rounded-[20px]">
                        <Image
                            src={data.collectOne}
                            alt='leftColection'
                            className='w-full scale-110'
                            width={500}
                            height={500}
                            priority
                            style={{ width: "100%" }}

                        />
                    </div>
                    <div className="flex w-full flex-row gap-3">
                        <div className="overflow-hidden w-full rounded-[20px]">
                            <Image
                                src={data.collectTwo}
                                alt='topLeftCollection'
                                className='w-full scale-110'
                                width={500}
                                height={500}
                                priority
                                style={{ width: "100%" }}
                            />
                        </div >
                        <div className="overflow-hidden w-full rounded-[20px]">
                            <Image
                                src={data.collectThree}
                                alt='topRightCollection'
                                className='w-full scale-110'
                                width={500}
                                height={500}
                                priority
                                style={{ width: "100%" }} />
                        </div >
                        <div className="overflow-hidden w-full rounded-[20px]">
                            <Image
                                src={data.collectFour}
                                alt='topRightCollection'
                                className='w-full scale-110'
                                width={500}
                                height={500}
                                priority
                                style={{ width: "100%" }} />
                        </div >
                    </div>
                    <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="p-2  relative">
                                    <div className="overflow-hidden rounded-3xl">
                                        <Image
                                            src={data.createrAvatar}
                                            width={80}
                                            height={80}
                                            alt='fredie' />
                                        <div className="absolute bottom-2 right-2 rounded-full bg-primary text-on__surface  w-4 h-4 flex items-center justify-center ">
                                            <FaCheck size={12} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h6 className='font-bold text-xl text-on__surface__dark dark:text-on__surface'>Creative Art Collection</h6>
                                    <div className="flex flex-row gap-1 items-center">
                                        <span className='text-[13px] text-white__second'>Created by</span>
                                        <span className='text-[15px] text-on__surface__dark dark:text-on__surface'>{data.createrName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-16 right-12 bg-dark__bg text-on__surface flex items-center gap-2 flex-row px-3 py-1 rounded-xl'>
                                <span className={`${liked ? 'text-critical' : 'text-on__surface'}`} onClick={likeCounter}><FaHeart /></span>
                                <span>{data.like}</span>
                            </div>
                        </div>
                </div>
            
        </div >
        </>
    )
}

export default CollectionCardV2