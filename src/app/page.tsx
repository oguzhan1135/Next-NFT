import SlidesPerView from '@/Components/LiveAuction/page'
import '../FontAwesomeIcons'
import '../../FontAwesomeConfig'
import '../app/globals.css'
import Image from 'next/image'
import BigRobo from '../../public/images/NFT/gaming-home-NFT.svg'
import TodaysPick from '@/Components/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
import { FontAwesomeIcon } from '../FontAwesomeIcons'
import { faBook, faRocket } from '@fortawesome/free-solid-svg-icons'
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
          <div className='button'>
            <FontAwesomeIcon icon={faRocket}/>
            <span>Explore</span>
          </div>
          <div className="button">
            <FontAwesomeIcon icon={faBook}/>
            <span>Create</span>
          </div>
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

      <ContentHeader
        title="Live Auction" />
      <SlidesPerView />
      <ContentHeader
        title="Today's Pick" />
      <TodaysPick />

    </div>
  )
}
