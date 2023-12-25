import React from 'react';
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
    nftCardData: NftCard; // 
}

const NftCard: React.FC<NftCardProps> = ({ nftCardData }) => {

    const { itemData, setItemData } = NftProductContext();


    const cardDataProps = () => {
        setItemData(nftCardData);
    }


    return (
        <>
            <div className='flex flex-col gap-4 bg-black__write p-5 min-w-full rounded-[20px] nft-card' >
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
                            <FaHeart />
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


                        <div className='absolute bottom-2 right-1/2 translate-x-1/2 w-max bg-dark__bg flex flex-row item-center justify-center gap-3 px-3 py-2 rounded-lg'>
                            <Image
                                src={FireLogo}
                                width={20}
                                height={20}
                                alt='logo'
                                className=' w-auto h-auto'
                            />
                            <span className='font-bold'>07 : 15 : 21 : 52</span>
                        </div>
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
                            <span className='font-bold text-white__second'>Creator</span>
                            <span className='font-bold'>{nftCardData.createrName}</span>
                        </div>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className='text-white__second'>Current Bid</span>
                        <span className='text-lg font-bold text-on__surface'>{(nftCardData.price / 357).toFixed(2)} {(nftCardData.currency).toUpperCase()}</span>
                    </div>
                </div>


                {nftCardData.sellCategory !== "live" ?
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
        </>




    );
}

export default NftCard;
