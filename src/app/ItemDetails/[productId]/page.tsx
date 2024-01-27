"use client"
import Mason from '@/../public/images/avatar/mason.svg';
import ContentHeader from '@/Components/ContentHeader/page';
import { FaEye, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { SlOptions } from 'react-icons/sl';
import Image from 'next/image';
import { useState } from 'react';
import SlidesPerView from '@/Components/Slider/LiveAuction/page'
import { NftProductContext } from '@/Context/NftCardContext';

const ItemDetails = ({ params }: { params: { productId: string } }) => {
    const counterFunction = (targetDate: string) => {
        const [counter, setCounter] = useState("");

        const interval = setInterval(() => {
            var now = new Date().getTime();
            var targetTime = new Date(targetDate).getTime();
            var differenceDate = new Date(targetTime - now);
            var day = differenceDate.getUTCDate() - 1;
            var hours = differenceDate.getUTCHours();
            var minute = differenceDate.getUTCMinutes();
            var second = differenceDate.getUTCSeconds();

            if (day <= 0 && hours <= 0 && minute <= 0 && second <= 0) {
                clearInterval(interval);
                setCounter("Time Out!!!")

            } else {
                setCounter(`${day < 10 ? `0${day}` : day} : ${hours < 10 ? `0${hours}` : hours} : ${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second}`);
            }
        }, 1000);
        return counter;
    }
    const { nftProducts } = NftProductContext();
    let itemData = nftProducts.find((product) => product.id === parseInt(params.productId))
    return (
        <>
            <div className=" main-container text-on__surface__dark dark:text-on__surface">
                <div className="content">
                    <div className="content-container pt-10">
                        <div className=' flex flex-col lg:flex-row gap-10 w-full'>

                            <div style={{ flex: '1' }}>

                                <div className="overflow-hidden rounded-xl ">
                                    <Image className='w-full' src={itemData?.nftImage ?? '/images/other/placeholder.svg'} alt="Product Image" width={700} height={700} />
                                </div>
                            </div>


                            <div style={{ flex: '1' }}>

                                <div className="flex flex-col gap-4 justify-start">
                                    <h1 className='font-bold text-4xl'>{itemData?.cardName}</h1>
                                    <div className="flex flex-row justify-between items-center gap-3">
                                        <div className="flex flex-row gap-3">
                                            <div className="flex flex-row items-center justify-center gap-2 rounded-3xl px-4 py-2 bg-gray dark:bg-black__write">
                                                <FaEye />
                                                {itemData?.view}
                                            </div>
                                            <div className="flex flex-row items-center justify-center gap-2 rounded-3xl px-4 py-2 bg-gray dark:bg-black__write">
                                                <FaHeart />
                                                {itemData?.like}
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <div className="flex items-center justify-center px-3 py-2 rounded-full bg-gray dark:bg-black__write">
                                                <IoIosSend />
                                            </div>
                                            <div className="flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2 bg-gray dark:bg-black__write">
                                                <SlOptions />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                                        <div className="flex flex-row  gap-4 rounded-3xl p-4 bg-gray dark:bg-black__write w-full">
                                            <div className="overflow-hidden rounded-xl">
                                                <Image
                                                    src={'/images/avatar/salvadordali.svg'} alt="Owned" width={45} height={45}
                                                />
                                            </div>
                                            <div className="flex flex-col ">
                                                <span className=' text-white__second'>Owned By</span>
                                                <span>Ralpp Garraway</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row  gap-4 rounded-3xl p-4 bg-gray dark:bg-black__write w-full">
                                            <div className="overflow-hidden rounded-xl">
                                                <Image
                                                    src={itemData?.createrAvatar ?? '/images/other/placeholder.svg'} alt="Owned Image" width={45} height={45}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className=' text-white__second'>Created By</span>
                                                <span>{itemData?.createrName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada.
                                        Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna amet sed ipsum
                                    </p>
                                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                                        <div className="flex flex-row justify-between gap-4 rounded-lg p-5 py-3 bg-gray dark:bg-black__write w-full">
                                            <span className='font-bold text-[15px]'>Current Bid</span>
                                            <div className="flex flex-row gap-2 items-center">
                                                <span className='font-bold text-xl'>4.89 ETH</span>
                                                <span className=' text-[13px] text-white__second'>=$12.246</span>
                                            </div>


                                        </div>
                                        {
                                            itemData?.targetDate !== "" ?
                                                <div className="flex flex-row justify-between gap-4 rounded-lg p-5 py-3 bg-gray dark:bg-black__write w-full">
                                                    <span className='font-bold text-[15px]'>Countdown</span>
                                                    <span className='font-bold text-xl'>{counterFunction(itemData?.targetDate ? itemData.targetDate : '2023-10-31T12:00:00Z')}</span>
                                                </div> :
                                                <></>
                                        }

                                    </div>
                                    {
                                        itemData?.stock === 0 ? (
                                            <div className="bg-warning text-black__write font-bold px-3 py-3 rounded-xl text-center">
                                                Coming Soon
                                            </div>
                                        ) : (
                                            <div className='button'>
                                                <FaShoppingBag />
                                                <span>Place Bid</span>
                                            </div>
                                        )
                                    }

                                    <div className="flex flex-row">
                                        <div className="py-3 border-b-2 border-b-transparent hover:border-b-primary" style={{ paddingRight: "16px" }}>
                                            Bid History
                                        </div>
                                        <div className="py-3 px-4 border-b-transparent">
                                            Info
                                        </div>
                                        <div className="py-3 px-4 border-b-transparent">
                                            Provenance
                                        </div>
                                    </div>
                                    <div className="flex flex-col tab-menu">
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center py-3 border-y dark:border-black__write border-gray gap-2">
                                            <div className="flex flex-row gap-3">
                                                <div className="overflow-hidden rounded-xl">
                                                    <Image
                                                        src={Mason}
                                                        alt='Mason'
                                                        width={45}
                                                        height={45} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div> <span className='font-bold text-[15px]'>Mason Woodward</span> <span className='text-[13px]'> place a bid</span></div>
                                                    <span className='text-[13px]'>8 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className='font-bold text-[15px]'>4.89 ETH</span>
                                                <span className='text-[13px]'>=$12,246</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <ContentHeader
                            title="Live Auction" />
                        <SlidesPerView />
                    </div>

                </div>



            </div>
        </>
    )
}
export default ItemDetails