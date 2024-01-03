'use client'
import NftCard from '@/Components/NftCard/page'
import { NftProductContext } from '@/Context/NftCardContext'
import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { CiCircleList } from 'react-icons/ci'
import { FaChevronUp, FaFilter } from 'react-icons/fa'

const Marketplace = () => {
  const { nftProducts, setNftProducts } = NftProductContext();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row bg-on__surface__dark">
          <div className="marketplace-tab-btn active">Live Auction</div>
          <div className="marketplace-tab-btn">Todays Picks</div>
          <div className="marketplace-tab-btn">Land</div>
          <div className="marketplace-tab-btn">Items</div>

        </div>
        <div className="grid grid-cols-12">
          <div className="grid col-span-12 lg:col-span-2">
            <div className="flex flex-col bg-on__surface__dark h-full">
              <div className="flex justify-between items-center px-10 py-4 border-b-black__write border-b">
                <span className='text-xl font-bold'>Filter</span>
                <span className='font-bold text-[14px]'>Reset</span>
              </div>
              <ul className='px-10 py-4 flex flex-col gap-4'>
                <li className=' contents '>
                  <div className="flex flex-col gap-4 border-b border-b-black__write">
                    <div className="flex justify-between items-center">
                      <span className='text-lg font-bold'>Categories</span>
                      <FaChevronUp />
                    </div>
                    <form>
                      <ul className='flex flex-col'>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="art" className='text-[15px] font-semibold w-full'>Art</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="art" id="art" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="music" className='text-[15px] font-semibold w-full'>Music</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="music" id="music" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="domain" className='text-[15px] font-semibold w-full'>Domain Names</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="domain" id="domain" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="virtual" className='text-[15px] font-semibold w-full'>Virtual Worlds</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="virtual" id="virtual" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="trading" className='text-[15px] font-semibold w-full'>Trading Cards</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="trading" id="trading" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="collectibles" className='text-[15px] font-semibold w-full'>Collectibles</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="collectibles" id="collectibles" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="sports" className='text-[15px] font-semibold w-full'>Sports</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="sports" id="sports" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="utility" className='text-[15px] font-semibold w-full'>Utility</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="utility" id="utility" />
                        </li>
                      </ul>
                    </form>

                  </div>
                </li>
                <li className=' contents '>
                  <div className="flex flex-col gap-4 border-b border-b-black__write">
                    <div className="flex justify-between items-center">
                      <span className='text-lg font-bold'>File Types</span>
                      <FaChevronUp />
                    </div>
                    <form>
                      <ul className='flex flex-col'>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="image" className='text-[15px] font-semibold w-full'>Image</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="image" id="image" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="video" className='text-[15px] font-semibold w-full'>Video</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="video" id="video" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="audio" className='text-[15px] font-semibold w-full'>Audio</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="audio" id="audio" />
                        </li>
                      </ul>
                    </form>

                  </div>
                </li>
                <li className=' contents '>
                  <div className="flex flex-col gap-4 border-b border-b-black__write">
                    <div className="flex justify-between items-center">
                      <span className='text-lg font-bold'>Currencies</span>
                      <FaChevronUp />
                    </div>
                    <form>
                      <ul className='flex flex-col'>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="bnb" className='text-[15px] font-semibold w-full'>BNB</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="bnb" id="bnb" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="busd" className='text-[15px] font-semibold w-full'>BUSD</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="busd" id="busd" />
                        </li>
                        <li className='list-none flex justify-between items-center py-2 cursor-pointer'>
                          <label htmlFor="eth" className='text-[15px] font-semibold w-full'>ETH</label>
                          <input className='w-[18px] h-[18px]' type="checkbox" name="eth" id="eth" />
                        </li>
                      </ul>
                    </form>

                  </div>
                </li>
                <li className=' contents '>
                  <div className="flex flex-col gap-4 border-b border-b-black__write">
                    <div className="flex justify-between items-center">
                      <span className='text-lg font-bold'>Price Range</span>
                      <FaChevronUp />
                    </div>
                    <form>
                      Range Alanı
                    </form>
                    <span>Price:  $800-$1850</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid col-span-12 lg:col-span-10 p-10">
            <div className="flex flex-col gap-[30px] w-full">
              <div className="flex  items-center justify-between">
                <h1 className='text-4xl font-bold'>1000 Items</h1>
                <div className="flex flex-row gap-6 items-center">
                  <div className="flex flex-row">
                    <div className="bg-black__write px-5 py-3 rounded-tl-xl rounded-bl-xl flex flex-row gap-2 font-bold items-center justify-center">
                      <BiCategory />
                      <span className='font-bold'>Grid</span>
                    </div>
                    <div className=" px-5 py-3 rounded-tr-xl rounded-br-xl flex flex-row gap-2 font-bold items-center border border-black__write justify-center">
                      <CiCircleList/>
                      <span className='font-bold'>List</span>
                    </div>
                  </div>
                  <div className=" dropdown-select">
                    <span>Low to High</span>
                    <FaFilter />
                  </div>
                </div>
              </div>


              <div className="grid gap-[30px] grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
                {nftProducts.filter(card => card.sellCategory === "live").map((nftData) => (
                  <NftCard key={nftData.id} nftCardData={nftData} />
                ))}
              </div>
              <div className="button w-max mx-auto white-b">
                Load More
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Marketplace