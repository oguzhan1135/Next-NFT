"use client"
import { NftProductContext } from "@/Context/NftCardContext";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Samson from '/public/images/avatar/samson.svg'
import { FaSearch, FaWallet, FaBell, FaMoon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

interface NftCard {
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
const Searchbar = () => {
    const { nftProducts } = NftProductContext();
    const [filteredProducts, setFilteredProducts] = useState<NftCard[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const marketplacePage = '/Marketplace';
    const homepageSpacielPage = '/HomepageSpaciel';
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleSearchBlur = () => {
        setFilteredProducts([]);
    };

    const toggleDropdown = (dropdownName: string) => {
        setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };



    const handleSearchClick = () => {
        toggleDropdown('search');
    };
    useEffect(() => {
        const filtered = nftProducts.filter((product) =>
            product.cardName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
                setFilteredProducts([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, searchTerm]);
    return (
        <div className="navbar-switch-area">
            <div className="cursor-pointer relative" ref={menuRef} >
                <FaSearch onClick={handleSearchClick} />
                {activeDropdown === 'search' && (
                    <div className='absolute z-50 top-12 w-80 right-[-50px] '>
                        <div className="flex flex-col relative ">
                            <div className=" flex flex-row gap-3 items-center w-max  bg-black__write py-3 px-4 rounded-3xl">
                                <input type="text"
                                    placeholder="Search Nft Card..."
                                    value={searchTerm}
                                    onBlur={handleSearchBlur}
                                    onChange={(e) => setSearchTerm(e.target.value)} className='text-on__surface bg-transparent outline-none' />
                                <span className='text-on__surface__dark'><FaSearch /></span>
                            </div>
                            <div className={` absolute top-8 pt-10 -z-10 flex-col rounded-bl-3xl rounded-br-3xl rounded-tr-3xl max-h-80 overflow-y-auto ${filteredProducts.length > 0 ? 'bg-black__write' : 'bg-transparent'}  w-full `}>

                                {filteredProducts.map((product) => (
                                    <div className='flex flex-row justify-between items-center p-3 ' key={product.id}>
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="overflow-hidden rounded-xl">
                                                <Image
                                                    src={product.nftImage ?? '/images/other/placeholder.svg'}
                                                    alt='Nft-card'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className='font-bold'>{product.cardName}</h3>
                                                <span>{product.createrName}</span>
                                            </div>
                                        </div>
                                        <span className='font-bold text-xl'>{product.price}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                )}
            </div>

            <div className='flex flex-row items-center rounded-full px-3 py-3 xl:px-10 gap-3  border-primary border-2'>
                <FaWallet />
                <span className='hidden xl:block'>Wallet Connect</span>
            </div>
            <div className="dropdown-area relative w-max" >
                <div className='navbar-switch' onClick={() => toggleDropdown('bell')}>
                    <FaBell />
                    {activeDropdown === 'bell' && (
                        <div className="absolute top-16 right-1 z-50 w-80">
                            <div className="flex flex-col gap-4  bg-black__write rounded-xl">
                                <div className="flex flex-row items-center justify-between px-5 pt-5">
                                    <h6 className='text-xl font-bold'>Notifications</h6>
                                    <span className=' text-white__second text-sm'>Show all</span>
                                </div>
                                <div className="flex flex-row gap-4 px-5" >
                                    <div className=" rounded-3xl px-5 flex justify-center items-center py-1 border border-on__surface">All</div>
                                    <div className="rounded-3xl px-5 flex justify-center items-center py-1 border border-on__surface">Unread</div>
                                </div>
                                <span className='font-bold text-sm text-left px-5'>Today</span>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4 px-5 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                                    <div className="overflow-hidden w-12 h-9 rounded-lg">
                                        <Image
                                            src={Samson}
                                            alt='avatar'
                                            className='w-full scale-100' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                                        <span className='text-left text-sm'>1 hours ago</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>

            <div className='navbar-switch'>
                <FaMoon />

            </div>
            <span className='lg:hidden'><IoIosMenu /></span>
        </div>
    )
}
export
    default Searchbar;