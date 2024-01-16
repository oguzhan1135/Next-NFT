import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import FireLogo from "@/../public/images/icon/fire.svg";
import Link from 'next/link';
import { NftProductContext } from '@/Context/NftCardContext';
interface NftCard {
    id: number;
    createrName: string;
    createrAvatar: string;
    like: number;
    nftImage: string;
    cardName: string;
    price: number;
    currentBid: string;
    currency: string;
    file: string;
    stock: number;
    sellCategory: string;
    category: string[];
    targetDate: string;
    view: number;
}
interface NftCardProps {
    nftCardData: NftCard;
    isListView: boolean;
}

const NftCard: React.FC<NftCardProps> = ({ nftCardData, isListView }) => {

    const { setItemData, nftProducts, setNftProducts, setAuthorData } = NftProductContext();
    const [liked, setLiked] = useState(false);


    const cardDataProps = () => {
        setItemData(nftCardData);
        const updatedNftProducts = [...nftProducts];
        const findProductIndex = updatedNftProducts.findIndex(product => product.id === nftCardData.id);
        if (findProductIndex !== -1) {
            updatedNftProducts[findProductIndex] = {
                ...updatedNftProducts[findProductIndex],
                view: nftCardData.view + 1
            };
            setNftProducts(updatedNftProducts);
        }
    }

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

    const likeCounter = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const updatedNftProducts = [...nftProducts];
        const findProductIndex = updatedNftProducts.findIndex(product => product.id === nftCardData.id);

        if (!liked) {
            setLiked(true);

            if (findProductIndex !== -1) {
                updatedNftProducts[findProductIndex] = {
                    ...updatedNftProducts[findProductIndex],
                    like: nftCardData.like + 1
                };
                setNftProducts(updatedNftProducts);
            }
        } else {
            setLiked(false)
            if (findProductIndex !== -1) {
                updatedNftProducts[findProductIndex] = {
                    ...updatedNftProducts[findProductIndex],
                    like: nftCardData.like - 1
                };
                setNftProducts(updatedNftProducts);
            }
        }
    }

    const authorData = () => {
        setAuthorData({ authorName: nftCardData.createrName, authorAvatar: nftCardData.createrAvatar })
    }


    return (
        <>
            {
                isListView ? <>
                    <div className="flex justify-between items-center bg-black__write p-5 rounded-[20px]">
                        <Link href={"/ItemDetails"}>
                            <div className="overflow-hidden rounded-[20px]">
                                <Image
                                    src={nftCardData.nftImage}
                                    alt='deneme'
                                    width={140}
                                    height={140}
                                    priority
                                    onClick={cardDataProps}
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col gap-4">
                            <span className=' text-white__second font-bold text-sm'>ITEM NAME</span>
                            <h3 className='text-lg font-bold'>{nftCardData.cardName}</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className=' text-white__second font-bold text-sm'>CREATOR</span>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={nftCardData.createrAvatar}
                                        alt='freddie'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <Link onClick={authorData} href={"/Author"} className='font-bold hover:text-primary text-hover'>{nftCardData.createrName}</Link>
                            </div>
                        </div>
                        {
                            nftCardData.sellCategory === "live" ?
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-1">
                                        <Image
                                            src={FireLogo}
                                            width={20}
                                            height={20}
                                            alt='logo'
                                            className=' w-auto h-auto'
                                        />
                                        <span className=' text-white__second font-bold text-sm'>COUNTDOWN</span>
                                    </div>
                                    <span className='font-bold'>{counterFunction(nftCardData.targetDate)}</span>
                                </div>
                                : <></>
                        }


                        <div className='bg-dark__bg text-on__surface flex items-center gap-2 flex-row px-3 py-1 rounded-xl'>
                            <span className={`${liked ? 'text-critical' : 'text-on__surface'}`} onClick={likeCounter}><FaHeart /></span>
                            <span>{nftCardData.like}</span>
                        </div>
                        <span className='bg-primary rounded-xl px-3 py-1 text-sm text-on__surface font-bold'>{nftCardData.currency.toUpperCase()}</span>
                        <div className="flex flex-col gap-4">
                            <span className=' text-white__second font-bold text-sm'>CURRENT BID</span>
                            <span className='text-lg font-bold text-on__surface'>{(nftCardData.price / 357).toFixed(2)} {(nftCardData.currency).toUpperCase()}</span>
                        </div>
                        {
                            nftCardData.stock < 1 ?
                                <div className=" bg-warning text-black__write font-bold px-3 py-1 rounded-xl">
                                    Comming Soon
                                </div> :
                                <div className="button place-bid">
                                    <FaShoppingBag />
                                    Place Bid
                                </div>
                        }


                    </div>
                </>
                    :
                    <div className='flex flex-col gap-4 bg-black__write p-5 min-w-full rounded-[20px] nft-card h-max' >
                        <Link href={"/ItemDetails"}>
                            <div className="flex overflow-hidden rounded-[20px] w-full relative nft-image">

                                <Image
                                    src={nftCardData.nftImage}
                                    alt='deneme'
                                    width={500}
                                    height={500}
                                    priority
                                    style={{ width: "100%" }}
                                    onClick={cardDataProps}
                                />
                                {
                                    nftCardData.stock < 1 ?
                                        <>
                                            <div className="absolute top-4 left-4 bg-warning text-black__write font-bold px-3 py-1 rounded-xl">
                                                Comming Soon
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }
                                <div className='absolute top-4 right-4 bg-dark__bg text-on__surface flex items-center gap-2 flex-row px-3 py-1 rounded-xl'>
                                    <span className={`${liked ? 'text-critical' : 'text-on__surface'}`} onClick={likeCounter}><FaHeart /></span>
                                    <span>{nftCardData.like}</span>
                                </div>
                                {
                                    nftCardData.sellCategory === "live" ? <>
                                        <div className="button place-bid-hover">
                                            <FaShoppingBag />
                                            <span>Place Bid</span></div>
                                    </> :
                                        <>
                                        </>
                                }

                                {
                                    nftCardData.sellCategory === "live" ?
                                        <div className='absolute bottom-2 right-1/2 translate-x-1/2 w-max bg-dark__bg flex flex-row item-center justify-center gap-3 px-3 py-2 rounded-lg'>
                                            <Image
                                                src={FireLogo}
                                                width={20}
                                                height={20}
                                                alt='logo'
                                                className=' w-auto h-auto'
                                            />
                                            <span className='font-bold'>{counterFunction(nftCardData.targetDate)}</span>
                                        </div> :
                                        <></>
                                }

                            </div>
                        </Link>

                        <div className="flex justify-between items-center">
                            <h3 className='text-lg font-bold'>{nftCardData.cardName}</h3>
                            <span className='bg-primary rounded-xl px-3 py-1 text-sm text-on__surface font-bold'>{nftCardData.currency.toUpperCase()}</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-row items-start gap-3">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={nftCardData.createrAvatar}
                                        alt='freddie'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col gap-0">
                                    <span className='font-bold text-white__second'>Creater</span>
                                    <Link onClick={authorData} href={"/Author"} className='font-bold hover:text-primary text-hover'>{nftCardData.createrName}</Link>
                                </div>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className='text-white__second'>Current Bid</span>
                                <span className='text-lg font-bold text-on__surface'>{(nftCardData.price / 357).toFixed(2)} {(nftCardData.currency).toUpperCase()}</span>
                            </div>
                        </div>


                        {nftCardData.sellCategory !== "live" && nftCardData.stock > 0 ?
                            <>
                                <div className="flex justify-between items-center">
                                    <div className="button place-bid">
                                        <FaShoppingBag />
                                        Place Bid
                                    </div>
                                    <div className="flex flex-row items-center gap-2 hover:text-primary cursor-pointer ">
                                        <FiRefreshCw />
                                        <span className=' text-base font-bold text-white__second hover:text-primary'>View History</span>
                                    </div>
                                </div>
                            </> :
                            <>
                            </>
                        }


                    </div >
            }

        </>




    );
}

export default NftCard;
