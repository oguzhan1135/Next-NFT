import React from 'react'
import Image from 'next/image'
import Background from '/public/images/other/home-page-bg.svg'
import Link from 'next/link'
import { FaRocket, FaBook, FaCheck } from 'react-icons/fa'
import BrowbyCategory from '@/Components/Slider/BrowbyCategory/page'
import ContentHeader from '@/Components/ContentHeader/page'
import LiveAuctionV2 from '@/Components/Slider/LiveAuctionV2/page'
import TodaysPick from '@/Components/GridComponents/TodaysPick/page'
import { BiCategory } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { FaCube } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import PopularCollection from '@/Components/Slider/PopularCollection/page'
import TopSellerGrid from '@/Components/GridComponents/TopSellerV2/page'

const HomepageSpaciel = () => {
    return (
        <>
            <div className="grid grid-cols-2 justify-center w-full  text-on__surface dark:text-on__surface__dark">
                <div className=" grid col-span-1  w-full  dark:bg-gradiant-dark bg-gradiant__color ">
                    <div className="homepage-header-area v2">
                        <div className="slogan-area">
                            <div className='slogan-v2 '>Discover, find and sell extraordinary monster NFTs</div>
                            <span className='text-on__surface'>Marketplace for monster character cllections non fungible token NFTs</span>
                            <div className="flex flex-row gap-3">
                                <Link href={"/"}>
                                    <div className='button text-on__surface'>
                                        <FaRocket />
                                        <span>Explore</span>
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="button text-on__surface">
                                        <FaBook />
                                        <span>Create</span>
                                    </div>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
                <div className=" grid col-span-1 w-full dark:bg-gradiant-dark bg-gradiant__color transform rotate-180  ">
                    <Image
                        src={Background}
                        alt='bg-homepage'
                        className='w-full transform rotate-180'
                    />
                </div>
            </div>
            <div className=" w-full bg-on__surface dark:bg-on__surface__dark py-20 ">
                <h2 className='text-4xl font-bold pb-10 ml-5'>Brow by Category</h2>
                <BrowbyCategory />

            </div>
            <div className="w-full max-w-screen-2xl py-20 flex flex-col gap-10">
                <ContentHeader title='Live Auctions' />
                <LiveAuctionV2 />
            </div>
            <div className=" w-full bg-gray dark:bg-on__surface__dark py-20">
                <div className="flex justify-center max-w-screen-2xl mx-auto">
                    <div className="flex-col flex lg:flex-row  w-full gap-[30px]">
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex flex-row gap-16 items-center">
                                <h2 className='text-4xl font-bold'>Top Seller</h2>

                                <div className="flex flex-row gap-7 items-center">
                                    <div className="py-2 px-7 font-bold rounded-full bg-on__surface dark:bg-black__write">1 Day</div>
                                    <div className="font-bold">1 Week</div>
                                    <div className="font-bold">1 Month</div>

                                </div>
                            </div>
                            <div className="grid grid-cols-2 justify-start gap-[30px]">
                                <TopSellerGrid />
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 w-full">
                            <div className="flex flex-row gap-16 items-center">
                                <h2 className='text-4xl font-bold'>Top Buyer</h2>

                                <div className="flex flex-row gap-7 items-center">
                                    <div className="py-2 px-7 font-bold rounded-full bg-on__surface dark:bg-black__write">1 Day</div>
                                    <div className="font-bold">1 Week</div>
                                    <div className="font-bold">1 Month</div>

                                </div>
                            </div>
                            <div className="grid grid-cols-2 justify-start gap-[30px]">
                                <TopSellerGrid />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-screen-2xl py-20 flex flex-col gap-10">
                <ContentHeader title='Todays Picks' />
                <div className="flex justify-center lg:justify-between items-center">
                    <div className="flex flex-row gap-9">
                        <div className="button white-b">
                            <BiCategory />
                            <span>Category</span>
                        </div>
                        <div className="button white-b">
                            <CiDollar />
                            <span>Price range</span>
                        </div>
                        <div className="button white-b">
                            <IoIosFlash />
                            <span>Sale type</span>
                        </div>
                        <div className="button white-b">
                            <FaCube />
                            <span>Blockchain</span>
                        </div>
                    </div>
                    <div className="button white-b">
                        <IoFilter />
                        <span>Sort By: Recently Added</span>
                    </div>
                </div>
                <TodaysPick />
            </div>
            <div className=" w-full bg-on__surface dark:bg-on__surface__dark">
                <div className="w-full max-w-screen-2xl py-20 mx-auto flex flex-col gap-10">
                    <ContentHeader title='Popular Collection' />
                    <PopularCollection />
                </div>
            </div>

        </>
    )
}

export default HomepageSpaciel