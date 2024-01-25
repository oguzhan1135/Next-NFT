'use client'

import { NftProductContext } from "@/Context/NftCardContext";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
type MinPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type MaxPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

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
interface FilterProps {
    handleFilterReset: () => void;
    handleCheckboxChange: (category: string, selectedCategories: string[], setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>) => void;
    handleMinPriceChange: MinPriceChangeHandler;
    handleMaxPriceChange: MaxPriceChangeHandler;
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    selectedFileType: string[];
    setSelectedFileType: React.Dispatch<React.SetStateAction<string[]>>;
    selectedCurrencies: string[];
    setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
    minPrice: number;
    maxPrice: number;
    setMinPrice: React.Dispatch<React.SetStateAction<number>>;
    setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
}
const FilterSection: React.FC<FilterProps> = ({
    handleFilterReset, handleCheckboxChange, handleMinPriceChange, handleMaxPriceChange,
    selectedCategories, setSelectedCategories, selectedFileType, setSelectedFileType, selectedCurrencies, setSelectedCurrencies,
    minPrice, maxPrice, setMaxPrice, setMinPrice }) => {


    const [accordionCategory, setAccordionCategory] = useState(true);
    const [accordionFileType, setAccordionFiileType] = useState(true);
    const [accordionCurrencies, setAccordionCurrencies] = useState(true);
    const [accordionPriceRange, setAccordionPriceRange] = useState(true);
    const [responsiveFilter, setResponsiveFilter] = useState(true);




    return (
        <>
            <div className="grid col-span-12 lg:col-span-2">
                <div className="flex flex-col bg-gray dark:bg-on__surface__dark h-full 2xl:h-screen">
                    <div onClick={() => setResponsiveFilter(!responsiveFilter)} className="flex justify-between items-center px-10 py-4 border-b-black__write border-b">
                        <span className='text-xl font-bold'>Filter</span>
                        {
                            responsiveFilter === false ? <FaChevronDown /> : <></>
                        }
                        <span className='font-bold text-[14px] cursor-pointer' onClick={handleFilterReset}>Reset</span>
                    </div>
                    {
                        responsiveFilter === true ?
                            <form>
                                <ul className='px-10 py-4 flex flex-col gap-4'>
                                    <li className=' contents '>
                                        <div className="flex flex-col gap-4 border-b border-b-black__write">
                                            <div onClick={() => setAccordionCategory(!accordionCategory)} className="flex justify-between items-center">
                                                <span className='text-lg font-bold'>Categories</span>
                                                {accordionCategory === true ? <FaChevronUp /> : <FaChevronDown />}

                                            </div>
                                            {
                                                accordionCategory === true ?
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
                                                    </ul> : <></>
                                            }


                                        </div>
                                    </li>
                                    <li className=' contents '>
                                        <div className="flex flex-col gap-4 border-b border-b-black__write">
                                            <div onClick={() => setAccordionFiileType(!accordionFileType)} className="flex justify-between items-center">
                                                <span className='text-lg font-bold'>File Types</span>
                                                {accordionFileType === true ? <FaChevronUp /> : <FaChevronDown />}

                                            </div>
                                            {
                                                accordionFileType === true ?
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
                                                    </ul> : <></>
                                            }


                                        </div>
                                    </li>
                                    <li className=' contents '>
                                        <div className="flex flex-col gap-4 border-b border-b-black__write">
                                            <div onClick={() => setAccordionCurrencies(!accordionCurrencies)} className="flex justify-between items-center">
                                                <span className='text-lg font-bold'>Currencies</span>
                                                {accordionCurrencies === true ? <FaChevronUp /> : <FaChevronDown />}
                                            </div>
                                            {
                                                accordionCurrencies === true ?
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
                                                    </ul> : <></>
                                            }

                                        </div>
                                    </li>
                                    <li className=' contents '>
                                        <div className="flex flex-col gap-4">
                                            <div onClick={() => setAccordionPriceRange(!accordionPriceRange)} className="flex justify-between items-center">
                                                <span className='text-lg font-bold'>Price Range</span>
                                                {accordionPriceRange === true ? <FaChevronUp /> : <FaChevronDown />}
                                            </div>
                                            {
                                                accordionPriceRange === true ?
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
                                                    </div> : <></>
                                            }

                                        </div>
                                    </li>
                                </ul>
                            </form> : <></>
                    }


                </div>
            </div>
        </>
    )

}
export default FilterSection