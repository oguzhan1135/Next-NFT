import React from 'react'
import Image from 'next/image'
import CollectionLeft from '@/../public/images/NFT/collection-item-1-1.svg';
import CollectionTopLeft from '@/../public/images/NFT/collection-item-top-1-1.svg';
import CollectionTopRight from '@/../public/images/NFT/collection-item-top-1-2.svg';
import CollectionBottom from '@/../public/images/NFT/collection-item-bottom-1.svg';
import FreddieCarpanter from '@/../../public/images/avatar/crispin.svg'
import { FaHeart, FaCheck } from 'react-icons/fa';


const CollectionCard = () => {
    return (
        <>
            <div className='flex flex-col gap-3 bg-on__surface shadow-nft-card dark:bg-black__write p-5 min-w-full rounded-[20px]' >
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="p-2  relative">
                            <div className="overflow-hidden rounded-3xl">
                                <Image
                                    src={FreddieCarpanter}
                                    width={80}
                                    height={80}
                                    alt='fredie' />
                                <div className="absolute bottom-2 right-2 rounded-full bg-primary text-on__surface  w-4 h-4 flex items-center justify-center ">
                                     <FaCheck size={12}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className='font-bold text-xl text-on__surface__dark dark:text-on__surface'>Creative Art Collection</h6>
                            <div className="flex flex-row gap-1 items-center">
                                <span className='text-[13px] text-white__second'>Created by</span>
                                <span className='text-[15px] text-on__surface__dark dark:text-on__surface'>Ralph Garraway</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-dark__bg text-on__surface flex items-center gap-2 flex-row px-3 py-1 rounded-xl'>
                       <FaHeart/>
                        <span>100</span>
                    </div>
                </div>

                <div className="flex flex-row gap-3  w-full">
                    <div className="overflow-hidden rounded-[20px]">
                        <Image
                            src={CollectionLeft}
                            alt='leftColection'
                            className=' w-60'

                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 w-auto">
                            <div className="overflow-hidden rounded-[20px]">
                                <Image
                                    src={CollectionTopLeft}
                                    alt='topLeftCollection'

                                />
                            </div >
                            <div className="overflow-hidden rounded-[20px]">
                                <Image
                                    src={CollectionTopRight}
                                    alt='topRightCollection'
                                />
                            </div >

                        </div>
                        <div className="overflow-hidden rounded-[20px]">
                            <Image
                                src={CollectionBottom}
                                alt='bottomCollection'
                                height={200}
                            />
                        </div >

                    </div>
                </div>
            </div >
        </>
    )
}

export default CollectionCard