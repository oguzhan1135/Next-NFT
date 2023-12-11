'use client'
import React from 'react'
import NftCard from '../NftCard/page'
import { NftProductContext } from '@/Context/NftCardContext';

const TodaysPick = () => {
  const { nftProducts, setNftProducts } = NftProductContext();
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-8'>

      {nftProducts.filter((card) => card.sellCategory === 'todays').map((filteredCard) => (
          <NftCard key={filteredCard.id} nftCardData={filteredCard} />
        ))}

    </div>

  )
}

export default TodaysPick