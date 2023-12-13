import SlidesPerView from '@/Components/Slider/LiveAuction/page'
import '../FontAwesomeIcons'
import '../../FontAwesomeConfig'
import '../app/globals.css'
import Image from 'next/image'
import BigRobo from '../../public/images/NFT/gaming-home-NFT.svg'
import TodaysPick from '@/Components/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
import { FontAwesomeIcon } from '../FontAwesomeIcons'
import { faBook, faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import TopSeller from '@/Components/Slider/TopSellerSlider/page'
import CreateAndSell from '@/Components/CreateAndSell/page'
import PopularCollection from '@/Components/Slider/PopularCollection/page'
export default function Home() {
  return (
    <div className='content'>
      <div className="homepage-header-area">
        <div className="slogan-area">
          <div className='slogan'>Discover, find,
            Sell extraordinary
            Monster NFTs</div>
          <span>Marketplace for monster character cllections non fungible token NFTs</span>
          <div className="flex flex-row gap-3">
            <Link href={"/"}>
              <div className='button'>
                <FontAwesomeIcon icon={faRocket} />
                <span>Explore</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="button">
                <FontAwesomeIcon icon={faBook} />
                <span>Create</span>
              </div>
            </Link>

          </div>
        </div>

        <div className="relative ">
          <Image
            src={BigRobo}
            alt='robo'
            layout='responsive'
            className='w-full '
          />
        </div>
      </div>
      <div className="content-container">
        <ContentHeader
          title="Live Auction" />
        <SlidesPerView />
      </div>
      <div className="content-container">
        <ContentHeader
          title='Top Seller' />
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
  )
}
