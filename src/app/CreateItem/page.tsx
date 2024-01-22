import React from 'react'
import ExampleNft from '/public/images/NFT/cyber-doberman.svg'
import Image from 'next/image'
import placeholdersvg from '/public/images/other/placeholder.svg'
import { FaShoppingBag } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import Link from 'next/link'
import { ImPriceTag } from "react-icons/im";
const CreateItem = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row gap-20 items-start justify-center pt-16 max-w-10xl text-on__surface__dark dark:text-on__surface pb-20">
                <div className="flex flex-col gap-5 items-start mx-auto max-w-[350px]">
                    <div className="rounded-[20px] p-5 flex flex-col gap-5 max-h-max bg-white shadow-nft-card dark:bg-black__write my-0 mx-auto">
                        <div className="overflow-hidden rounded[20px]">
                            <Image
                                src={ExampleNft}
                                alt='avatar'
                                className='w-full'
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-lg font-bold text-on__surface__dark dark:text-on__surface'>Cyber Doberman #766</h3>
                            <span className='bg-primary rounded-xl px-3 py-1 text-sm text-on__surface font-bold'>BSC</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-row items-start gap-3">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={placeholdersvg}
                                        alt='freddie'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col gap-0">
                                    <span className='font-bold text-white__second'>Creator</span>
                                    <span className='font-bold'>Freddie Carpenter</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className='text-white__second'>Current Bid</span>
                                <span className='text-lg font-bold text-on__surface'>4.89 ETH</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="button place-bid">
                                <FaShoppingBag />
                                Place Bid
                            </div>
                            <div className="flex flex-row items-center gap-2 hover:text-primary cursor-pointer ">
                                <FiRefreshCw />
                                <span className=' text-base font-bold text-white__second hover:text-primary'>View History</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-6 w-full">
                    <h6 className="text-xl font-bold">Upload file</h6>
                    <div className="py-10 px-5 flex flex-col lg:flex-row justify-between items-center border-2 rounded-lg border-black__write">
                        <span className=" text-white__second">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                        <div className="button white-b">
                            <Link href="#">Upload File</Link>
                        </div>
                    </div>
                    <h6 className="text-xl font-bold">Select Method</h6>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <Link href={"/"} className='create-item-method active'>
                            <ImPriceTag />
                            <span>Fixed price</span>
                        </Link>
                        <Link href={"/"} className='create-item-method'>
                            <ImPriceTag />
                            <span>Fixed price</span>
                        </Link>
                        <Link href={"/"} className='create-item-method'>
                            <ImPriceTag />
                            <span>Fixed price</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <label htmlFor="price" className='text-xl'>Price</label>
                        <input type="text" name="price" id="price" placeholder="Enter price for one item (ETH)" className="p-3 bg-transparent rounded-md border border-black__write" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <label htmlFor="title" className='text-xl'>Title</label>
                        <input type="text" name="title" id="title" placeholder="e.g. “This is very limited item”" className="p-3 bg-transparent rounded-md border border-black__write" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <label htmlFor="description" className='text-xl'>Description</label>
                        <textarea name="description" id="description" cols={30} rows={6} className="p-3 bg-transparent rounded-md border border-black__write"
                            placeholder="Description"/>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-6">

                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="royalties" className='text-xl'>Royalties</label>
                            <input type="text" name="royalties" id="royalties" placeholder="5%" className="p-3 bg-transparent rounded-md border border-black__write" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="size" className='text-xl'>Size</label>
                            <input type="text" name="size" id="size" placeholder="e.g. “size”" className="p-3 bg-transparent rounded-md border border-black__write" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="title" className='text-xl'>Collection</label>
                            <select name="collection" id="collection" className="p-3 bg-transparent rounded-md border border-black__write">
                                <option value="Art">Art</option>
                                <option value="Music">Music</option>
                            </select>                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default CreateItem