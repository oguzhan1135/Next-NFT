import React from 'react'
import { FaBookmark, FaImage, FaWallet } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

const CreateAndSell = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 ">
                <div className="flex flex-col">
                    <div className="flex justify-center items-center p-5 rounded-xl bg-primary w-max mb-7">
                        <i className='text-2xl'><FaWallet /></i>
                    </div>
                    <h5 className=' text-2xl font-bold mb-[10px]'>Set Up your Wallet</h5>
                    <p>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center p-5 rounded-xl bg-done w-max mb-7">
                        <i className='text-2xl'><TbAppsFilled /></i>
                    </div>
                    <h5 className=' text-2xl font-bold mb-[10px]'>Create Your Collection</h5>
                    <p>Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center p-5 rounded-xl bg-primary w-max mb-7">
                        <i className='text-2xl'><FaImage /></i>
                    </div>
                    <h5 className=' text-2xl font-bold mb-[10px]'>Add your NFTs</h5>
                    <p>Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center p-5 rounded-xl bg-critical w-max mb-7">
                        <i className='text-2xl'><FaBookmark /></i>
                    </div>
                    <h5 className=' text-2xl font-bold mb-[10px]'>List them for sale</h5>
                    <p>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
            </div>
        </>
    )
}

export default CreateAndSell