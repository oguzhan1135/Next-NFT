import React from 'react'
import SlidesPerView from '@/Components/Slider/LiveAuction/page'
import { FaBook, FaRocket } from "react-icons/fa";
import '@/app/globals.css'
import Image from 'next/image'
import BigRobo from '/public/images/NFT/gaming-home-NFT.svg'
import TodaysPick from '@/Components/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
import Link from 'next/link'
import TopSeller from '@/Components/Slider/TopSellerSlider/page'
import CreateAndSell from '@/Components/CreateAndSell/page'
import PopularCollection from '@/Components/Slider/PopularCollection/page'
const HomapageV2 = () => {
  return (
    <main className='main-container'>
    <div className='content'>
      <div className="homepage-header-area v2">
        <div className="slogan-area">
          <div className='slogan-v2'>Discover, and collect <span className='gradiant-write'>extraordinary</span>           <span> Monster NFTs</span>
           </div>
          <span>Marketplace for monster character cllections non fungible token NFTs</span>
          <div className="flex flex-row gap-3">
            <Link href={"/"}>
              <div className='button'>
                <FaRocket />
                <span>Explore</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="button">
                <FaBook />
                <span>Create</span>
              </div>
            </Link>

          </div>
        </div>

       
      </div>
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
  )
}

export default HomapageV2