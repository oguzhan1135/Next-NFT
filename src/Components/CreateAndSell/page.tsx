import { faImage, faTableCells, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CreateAndSell = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row gap-5 ">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-center items-center p-4 rounded-xl bg-primary w-max">
                        <FontAwesomeIcon icon={faWallet}/>
                    </div>
                    <h5 className=' text-2xl font-bold'>Set Up your Wallet</h5>
                    <p>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center p-4 rounded-xl bg-done w-max">
                        <FontAwesomeIcon icon={faTableCells}/>
                    </div>
                    <h5 className=' text-2xl font-bold'>Create Your Collection</h5>
                    <p>Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection</p>
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center p-4 rounded-xl bg-primary w-max">
                        <FontAwesomeIcon icon={faImage}/>
                    </div>
                    <h5 className=' text-2xl font-bold'>Add your NFTs</h5>
                    <p>Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center p-4 rounded-xl bg-critical w-max">
                        <FontAwesomeIcon icon={faWallet}/>
                    </div>
                    <h5 className=' text-2xl font-bold'>List them for sale</h5>
                    <p>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
        </div>
    </>
  )
}

export default CreateAndSell