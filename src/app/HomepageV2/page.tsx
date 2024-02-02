import React from 'react'
import SlidesPerView from '@/Components/Slider/LiveAuction/page'
import { FaBook, FaRocket } from "react-icons/fa";
import '@/app/globals.css'
import TodaysPick from '@/Components/GridComponents/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
import Link from 'next/link'
import TopSeller from '@/Components/Slider/TopSellerSlider/page'
import CreateAndSell from '@/Components/CreateAndSell/page'
import PopularCollection from '@/Components/Slider/PopularCollection/page'
const HomapageV2 = () => {
  return (
    <>
    <div className="flex flex-col w-full items-center">
    <div className="homepage-header-area v2 w-full dark:bg-header-bg bg-header-bg-light  mb-10 bg-cover">
            <div className="slogan-area ">
              <div className='slogan-v2'>Discover, and collect <span className='gradiant-write'>extraordinary</span>           <span> Monster NFTs</span>
              </div>
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
          <main className='main-container'>
        <div className='content'>
         
          <div className="content-container">
            <CreateAndSell />
          </div>
          <div className="content-container">
            <ContentHeader
              title="Live Auction" />
            <SlidesPerView />
          </div>
          <div className="content-container">
            <TopSeller />
          </div>
          <div className="content-container">
            <ContentHeader
              title="Today's Pick" />
            <TodaysPick />
          </div>
          <div className="content-container">
            <ContentHeader title='Popular Collection' />
            <PopularCollection />
          </div>

        </div>
      </main>
    </div>
      
    </>

  )
}

export default HomapageV2