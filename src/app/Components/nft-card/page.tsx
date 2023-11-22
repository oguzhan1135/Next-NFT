import React from 'react'

const nftCard = () => {
  return (
        <div className='flex flex-col p-5 bg-gray-900 text-white'>
            <div className="flex overflow-hidden rounded-md bg-red-500">
                <img className='flex h-auto w-full' src="../../../../public/images/nft/sir-Lion-nft.svg" alt="" />
            </div>

            <span className='text-2xl text-red'>Card Name</span>
        </div>
  )
}

export default nftCard