"use client"
import { NftProductContext } from "@/Context/NftCardContext";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Samson from '/public/images/avatar/samson.svg'
import { FaSearch, FaWallet, FaBell, FaMoon, FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import Link from "next/link";

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
    const { nftProducts, loggedUser, setLoggedUser } = NftProductContext();
    const [filteredProducts, setFilteredProducts] = useState<NftCard[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileNavbarMenu, SetMobileNavbarMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);



    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.getElementById('navbar')?.classList.remove('bg-gradiant__color');
        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById('navbar')?.classList.add('bg-gradiant__color');
        }
    }, [darkMode]);



    const handleSearchBlur = () => {
        setFilteredProducts([]);
    };

    const toggleDropdown = (dropdownName: string) => {
        setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };

    const logOut = () => {
        setLoggedUser({ id: 1, name: "", mail: "", password: "" })
    }

    const handleSearchClick = () => {
        toggleDropdown('search');
    };
    useEffect(() => {
        const filtered = nftProducts.filter((product) =>
            product.cardName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);

        const handleSearchClick = () => {
            toggleDropdown('search');
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                event.target instanceof Node &&
                !menuRef.current.contains(event.target) &&
                !(event.target as Element).closest('.dropdown-area')
            ) {
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
        <div className="navbar-switch-area relative">
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
                <FaMoon onClick={() => setDarkMode(!darkMode)} />
            </div>
            {
                loggedUser.name !== "" ?
                    <div className="dropdown-area relative w-max" >
                        <div className='navbar-switch' onClick={() => toggleDropdown('user')}>
                            <FaUser />
                            {activeDropdown === 'user' && (
                                <div className="absolute top-16 bg-on__surface right-1 z-50 rounded-xl w-60">
                                    <div className="flex flex-col">
                                        <Link href={"/Profile"} className="flex flex-row gap-2 items-center py-2 px-4 border-b border-b-gray rounded-tl-xl rounded-tr-xl hover:bg-white__second transition-all duration-300">
                                            <i className="text-on__surface__dark text-xl"><FaUser /></i>
                                            <span className="font-bold text-on__surface__dark text-xl">{loggedUser.name}</span>
                                        </Link>
                                        <Link href={"/Login"} onClick={logOut} className="flex flex-row gap-2 items-center py-2 px-4 rounded-bl-xl rounded-br-xl hover:bg-white__second transition-all duration-300">
                                            <i className="text-on__surface__dark text-xl"><CgLogOut /></i>
                                            <span className="font-bold text-on__surface__dark text-xl">LOG OUT</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    :
                    <>
                    </>
            }


        </div>
    )
}
export
    default Searchbar;