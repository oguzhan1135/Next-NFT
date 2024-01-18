import SlidesPerView from '@/Components/Slider/LiveAuction/page'
import { FaBook, FaRocket } from "react-icons/fa";
import '../app/globals.css'
import Image from 'next/image'
import BigRobo from '../../public/images/NFT/gaming-home-NFT.svg'
import TodaysPick from '@/Components/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
import Link from 'next/link'
import TopSeller from '@/Components/Slider/TopSellerSlider/page'
import CreateAndSell from '@/Components/CreateAndSell/page'
import PopularCollection from '@/Components/Slider/PopularCollection/page'
export default function Home() {
  return (
    <main className='main-container'>
      <span className="cloud-effect w-40 h-40 top-0 right-0"></span>
      <span className="cloud-effect w-40 h-40 top-0 left-0"></span>
      <div className='content'>
        <div className="homepage-header-area">
          <div className="slogan-area">
            <div className='slogan'>Discover, find,
              <span className='gradiant-write'>Sell extraordinary</span>
              Monster NFTs</div>
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

          <div className="relative ">
              <span className=" animate-[fadeIn_3s_linear_infinite] buble-solid-circle absolute top-[3%] right-[16%] p-[27px]">
                <span className="buble-solid-circle-in p-6"></span>
              </span>

              <span className=" animate-[fadeIn_3s_linear_infinite] buble-solid-circle absolute top-[28%] right-[13%] p-8"></span>

              <span className=" animate-[fadeIn_4s_linear_infinite] buble-solid-circle absolute top-[14%] right-[10%] p-[15px]"></span>

              <span className=" animate-[fadeIn_5s_linear_infinite] buble-solid-circle absolute top-[55%] left-25% p-5"></span>

              <span className=" animate-[fadeIn_6s_linear_infinite] buble-solid-circle absolute top-[10%] left-[0%] p-4">
                <span className="buble-solid-circle-in p-3"></span>
              </span>

              <span className="buble-solid-circle absolute top-[12%] right-[65%] p-[10px]"></span>

            <Image
              src={BigRobo}
              alt='robo'
              className='w-full  animate-[fadeIn_5s_linear_infinite] '
              priority
            />
          </div>
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
        <div className="content-container">
          <h2 className='font-bold text-[36px]'>Create And Your Sell Nfts</h2>
          <CreateAndSell />
        </div>
      </div>
    </main >
  )


}
