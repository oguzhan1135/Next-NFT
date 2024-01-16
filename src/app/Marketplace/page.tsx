'use client'
import Dropdown from '@/Components/FilterDropdown/page'
import NftCard from '@/Components/NftCard/page'
import { NftProductContext } from '@/Context/NftCardContext'
import React, { useState, useEffect } from 'react'
import { BiCategory } from 'react-icons/bi'
import { CiCircleList } from 'react-icons/ci'
import { FaChevronUp, FaFilter } from 'react-icons/fa'
interface Nft {
  id: number;
  createrName: string;
  createrAvatar: string;
  like: number;
  nftImage: string;
  cardName: string;
  price: number;
  currentBid: string;
  currency: string;
  file: string;
  stock: number;
  sellCategory: string;
  category: string[];
  targetDate: string;
  view: number;
}

const Marketplace: React.FC = () => {
  const { nftProducts } = NftProductContext();
  const [minPrice, setMinPrice] = useState<number>(800);
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFileType, setSelectedFileType] = useState<string[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [filteredProducts, setFilterProducts] = useState<Nft[]>(nftProducts)
  const [activeTab, setActiveTab] = useState("live");
  const [shortBy, setShortBy] = useState("Short By")
  const [isListView, setListView] = useState(false);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleShortBySelect = (selectedShortBuyOption: string) => {
    setShortBy(selectedShortBuyOption)

  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const handleCheckboxChange = (category: string, filterType: string[], setFilterFunction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (filterType.includes(category)) {
      setFilterFunction(filterType.filter(cat => cat !== category));
    } else {
      setFilterFunction([...filterType, category]);
    }
  };
  const applyFilters = () => {
    const filtered = nftProducts.filter((product) =>
      product.sellCategory === activeTab &&
      (selectedCategories.length === 0 || selectedCategories.some(selectedCategory => product.category.includes(selectedCategory))) &&
      (selectedCurrencies.length === 0 || selectedCurrencies.includes(product.currency)) &&
      (selectedFileType.length === 0 || selectedFileType.includes(product.file)) &&
      (product.price >= minPrice && product.price <= maxPrice)
    );

    let updatedProducts = [...filtered];
    if (shortBy === "Low to High") {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    } else if (shortBy === "High to Low") {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updatedProducts);
  };


  const handleFilterReset = () => {
    setSelectedCategories([])
    setSelectedCurrencies([]);
    setSelectedFileType([]);
    setMaxPrice(3500);
    setMinPrice(800);
    setShortBy("Short By");
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  useEffect(() => {
    applyFilters();

  }, [selectedCategories, nftProducts, selectedCurrencies, maxPrice, minPrice, selectedFileType, activeTab, shortBy]);


  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row bg-on__surface__dark">
          <div
            className={`marketplace-tab-btn ${activeTab === "live" ? 'active' : ''}`}
            onClick={() => handleTabClick("live")}
          >
            Live Auction
          </div>
          <div
            className={`marketplace-tab-btn ${activeTab === "todays" ? 'active' : ''}`}
            onClick={() => handleTabClick("todays")}
          >
            Todays Picks
          </div>
          <div
            className={`marketplace-tab-btn ${activeTab === "land" ? 'active' : ''}`}
            onClick={() => handleTabClick("land")}
          >
            Land
          </div>
          <div
            className={`marketplace-tab-btn ${activeTab === "items" ? 'active' : ''}`}
            onClick={() => handleTabClick("items")}
          >
            Items
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="grid col-span-12 lg:col-span-2">
            <div className="flex flex-col bg-on__surface__dark h-full 2xl:h-screen">
              <div className="flex justify-between items-center px-10 py-4 border-b-black__write border-b">
                <span className='text-xl font-bold'>Filter</span>
                <span className='font-bold text-[14px] cursor-pointer' onClick={handleFilterReset}>Reset</span>
              </div>
              <form>
                <ul className='px-10 py-4 flex flex-col gap-4'>
                  <li className=' contents '>
                    <div className="flex flex-col gap-4 border-b border-b-black__write">
                      <div className="flex justify-between items-center">
                        <span className='text-lg font-bold'>Categories</span>
                        <FaChevronUp />
                      </div>
                      <ul className='flex flex-col'>
                        {["Art", "Music", "Domain Names", "Virtual Worlds", "Trading Cards", "Collectibles", "Sports", "Utility"].map(category => (
                          <li key={category} className='list-none flex justify-between items-center py-2 cursor-pointer'>
                            <label htmlFor={category} className='text-[15px] font-semibold w-full'>{category}</label>
                            <input
                              className='w-[18px] h-[18px]'
                              type="checkbox"
                              name={category}
                              id={category}
                              onChange={() => handleCheckboxChange(category, selectedCategories, setSelectedCategories)}
                            />
                          </li>
                        ))}
                      </ul>

                    </div>
                  </li>
                  <li className=' contents '>
                    <div className="flex flex-col gap-4 border-b border-b-black__write">
                      <div className="flex justify-between items-center">
                        <span className='text-lg font-bold'>File Types</span>
                        <FaChevronUp />
                      </div>
                      <ul className='flex flex-col'>
                        {["Image", "Video", "Audio"].map(category => (
                          <li key={category} className='list-none flex justify-between items-center py-2 cursor-pointer'>
                            <label htmlFor={category} className='text-[15px] font-semibold w-full'>{category}</label>
                            <input
                              className='w-[18px] h-[18px]'
                              type="checkbox"
                              name={category}
                              id={category}
                              onChange={() => handleCheckboxChange(category, selectedFileType, setSelectedFileType)}
                            />
                          </li>
                        ))}
                      </ul>

                    </div>
                  </li>
                  <li className=' contents '>
                    <div className="flex flex-col gap-4 border-b border-b-black__write">
                      <div className="flex justify-between items-center">
                        <span className='text-lg font-bold'>Currencies</span>
                        <FaChevronUp />
                      </div>
                      <ul className='flex flex-col'>
                        {["BNB", "BUSD", "ETH"].map(category => (
                          <li key={category} className='list-none flex justify-between items-center py-2 cursor-pointer'>
                            <label htmlFor={category} className='text-[15px] font-semibold w-full'>{category}</label>
                            <input
                              className='w-[18px] h-[18px]'
                              type="checkbox"
                              name={category}
                              id={category}
                              onChange={() => handleCheckboxChange(category, selectedCurrencies, setSelectedCurrencies)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className=' contents '>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className='text-lg font-bold'>Price Range</span>
                        <FaChevronUp />
                      </div>
                      <div className="price-range-slider">
                        <input
                          type="range"
                          min={0}
                          max={3500}
                          value={minPrice}
                          onChange={handleMinPriceChange}
                        />
                        <input
                          type="range"
                          min={0}
                          max={3500}
                          value={maxPrice}
                          onChange={handleMaxPriceChange}
                        />
                        <span>Min-Max: ${minPrice} - ${maxPrice}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </form>

            </div>
          </div>
          <div className="grid col-span-12 lg:col-span-10 p-10">
            <div className="flex flex-col gap-[30px] w-full">
              <div className="flex  items-center justify-between">
                <h1 className='text-4xl font-bold'>1000 Items</h1>
                <div className="flex flex-row gap-6 items-center">
                  <div className="flex flex-row overflow-hidden border border-black__write rounded-xl">
                    <div
                      onClick={() => setListView(false)}
                      className={` px-5 py-3  flex flex-row gap-2 font-bold items-center justify-center cursor-pointer ${!isListView ? 'bg-black__write' : ''}`}
                    >
                      <BiCategory />
                      <span className='font-bold'>Grid</span>
                    </div>
                    <div
                      onClick={() => setListView(true)}
                      className={`px-5 py-3 flex flex-row gap-2 font-bold items-center  justify-center cursor-pointer ${isListView ? 'bg-black__write' : ''}`}
                    >
                      <CiCircleList />
                      <span className='font-bold'>List</span>
                    </div>
                  </div>
                  <Dropdown options={["Short By", "Low to High", "High to Low"]} defaultOption='Short By' onSelect={handleShortBySelect} />
                </div>
              </div>


              <div className={`${isListView ? 'flex flex-col gap-[30px]' : 'grid gap-[30px] grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2'}`}>
                {filteredProducts.map((nftData) => (
                  <NftCard key={nftData.id} nftCardData={nftData} isListView={isListView} />
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


