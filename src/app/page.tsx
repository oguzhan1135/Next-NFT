import SlidesPerView from '@/Components/LiveAuction/page'
import '../FontAwesomeIcons'
import '../../FontAwesomeConfig'
import Image from 'next/image'
import BigRobo from '../../public/images/NFT/gaming-home-NFT.svg'
import TodaysPick from '@/Components/TodaysPick/page'
import ContentHeader from '@/Components/ContentHeader/page'
export default function Home() {
  return (
    <div className='content'>

      <div className="flex w-full flex-row justify-between items-center">
        <h1 className='text-[56px] text-7xl'>Gradian slogan Area</h1>
        <div className="relative">
          <Image
            src={BigRobo}
            alt='robo'
            layout='responsive'
            className='w-full'
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
