import React from 'react'
import NftCard from '../NftCard/page'

const TodaysPick = () => {
  return (
<div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-8'>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
</div>

  )
}

export default TodaysPick