'use client'
import Dropdown from '@/Components/FilterDropdown/page'
import NftCard from '@/Components/Cards/NftCard/page'
import { NftProductContext } from '@/Context/NftCardContext'
import React, { useState, useEffect } from 'react'
import { BiCategory } from 'react-icons/bi'
import { CiCircleList } from 'react-icons/ci'
import { FaChevronDown, FaChevronUp, FaFilter } from 'react-icons/fa'
import ProductList from '@/Components/Marketplace/ProductList/page'
import MarketplaceHeader from '@/Components/Marketplace/Header/page'
import FilterSection from '@/Components/Marketplace/FilterSection/page'
import TabFilter from '@/Components/Marketplace/TabFilterSelection/page'
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
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFileType, setSelectedFileType] = useState<string[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [filteredProducts, setFilterProducts] = useState<Nft[]>(nftProducts)
  const [activeTab, setActiveTab] = useState("live");
  const [shortBy, setShortBy] = useState("Short By")
  const [isListView, setListView] = useState(false);


  const handleShortBySelect = (selectedShortBuyOption: string) => {
    setShortBy(selectedShortBuyOption)
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const handleCheckboxChange = (category: string, filterType: string[], setFilterFunction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (filterType.includes(category)) {
      setFilterFunction(filterType.filter(cat => cat !== category));
    } else {
      setFilterFunction([...filterType, category]);
    }
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



  useEffect(() => {
    applyFilters();

  }, [selectedCategories, nftProducts, selectedCurrencies, maxPrice, minPrice, selectedFileType, activeTab, shortBy]);


  return (
    <>
      <div className="flex flex-col w-full transition-all duration-300 dark:text-on__surface text-on__surface__dark">
        <TabFilter handleTabClick={handleTabClick} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="grid grid-cols-12">
          <FilterSection
            handleCheckboxChange={handleCheckboxChange}
            handleFilterReset={handleFilterReset}
            handleMaxPriceChange={handleMaxPriceChange}
            handleMinPriceChange={handleMinPriceChange}
            selectedCategories={selectedCategories}
            selectedCurrencies={selectedCurrencies}
            selectedFileType={selectedFileType}
            setSelectedCategories={setSelectedCategories}
            setSelectedCurrencies={setSelectedCurrencies}
            setSelectedFileType={setSelectedFileType}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice} />
          <div className="grid col-span-12 lg:col-span-10 p-10">
            <div className="flex flex-col gap-[30px] w-full">
              <MarketplaceHeader isListView={isListView} handleShortBySelect={handleShortBySelect} setListView={setListView} />
              <div className={`${isListView ? 'flex flex-col gap-[30px]' : 'grid gap-[30px] grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2'}`}>
                <ProductList data={filteredProducts} isListView={isListView} />
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


