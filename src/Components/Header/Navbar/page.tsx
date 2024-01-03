'use-client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaAdjust, FaBell, FaChevronDown, FaMoon, FaSearch, FaWallet } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { NftProductContext } from '@/Context/NftCardContext';
import Image from 'next/image';
import Samson from '/public/images/avatar/samson.svg'

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
const Navbar: React.FC = () => {
  const { nftProducts } = NftProductContext();
  const [filteredProducts, setFilteredProducts] = useState<NftCard[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const marketplacePage = '/Marketplace';
  const homepageSpacielPage = '/HomepageSpaciel';
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const handleSearchBlur = () => {
    setFilteredProducts([]);
  };

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
  }, [menuRef, nftProducts, searchTerm]);

  const handleSearchClick = () => {
    toggleDropdown('search');
  };


  console.log(filteredProducts.length)
  return (
    <>
      <div className={`navbar-header ${(["/", "/HomepageSpaciel", "/HomepageV2", "/Marketplace"].includes(router)) ? 'homepage' : 'navbar-v2'}`}>
        <div className='navbar-container'>
          <div className={`${router === marketplacePage || router === homepageSpacielPage ? 'v2-w-container' : 'main-container'}`}>
            <div className='navbar'>
              <div className="logo">
                <Link href={"/"}>
                  <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.75 0C10.2255 5.0344 11.25 19.2187 11.25 19.2187C11.25 19.2187 7.5 17.9375 7.5 12.1719C3.02601 14.831 0 19.9421 0 25.625C0 34.1164 6.71572 41 15 41C23.2843 41 30 34.1164 30 25.625C29.9999 13.1328 18.75 10.5703 18.75 0V0ZM16.3176 35.7023C13.3034 36.4725 10.2505 34.5924 9.49887 31.5027C8.74736 28.4131 10.5816 25.2838 13.596 24.5135C20.8732 22.6538 21.7852 18.4592 21.7852 18.4592C21.7852 18.4592 25.4141 33.3775 16.3176 35.7023Z" fill="url(#paint0_linear_161_67)" />
                    <defs>
                      <linearGradient id="paint0_linear_161_67" x1="26.25" y1="-1.74884e-06" x2="-5.52352" y2="31.3469" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E250E5" />
                        <stop offset="1" stopColor="#4B50E6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h1 className='logo'>Siyaz</h1>
                </Link>
              </div>
              <ul className='items'>
                <li className='relative group'><Link href={"/"}>Home <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Homepage</Link>
                      <Link href={"/HomepageV2"}><span className='sub-menu-line'></span>Homepage-2</Link>
                      <Link href={"/Marketplace"}><span className='sub-menu-line'></span>Marketplace</Link>
                      <Link href={"/HomepageSpaciel"}><span className='sub-menu-line'></span>Homepage (Spaciel)</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/Explore"}>Explore <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/Explore"}><span className='sub-menu-line'></span> Explore</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Activity <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Activity-1</Link>
                      <Link href={"/"}><span className='sub-menu-line'></span> Activity-2</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Community <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Community-1</Link>
                      <Link href={"/"}><span className='sub-menu-line'></span> Community-2</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Pages <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/Login"}><span className='sub-menu-line'></span> Login</Link>
                      <Link href={"/SignUp"}><span className='sub-menu-line'></span> Sign Up</Link>
                      <Link href={"/CreateItem"}><span className='sub-menu-line'></span> Create Item</Link>
                      <Link href={"/Profile"}><span className='sub-menu-line'></span> Profile</Link>
                      <Link href={"/EditProfile"}><span className='sub-menu-line'></span> Edit Profile</Link>
                      <Link href={"/Author"}><span className='sub-menu-line'></span>Author</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Contact <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Contact</Link>
                    </div>
                  </div>
                </li>

              </ul>
              <div className="navbar-switch-area">
                <div className="cursor-pointer relative" ref={menuRef} >
                  <FaSearch onClick={handleSearchClick} />
                  {activeDropdown === 'search' && (
                    <div className='absolute z-50 top-12 w-80 right-10 '>
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
                       <div className="flex flex-col gap-4 p-5 bg-black__write rounded-xl">
                        <div className="flex flex-row items-center justify-between">
                          <h6 className='text-xl font-bold'>Notifications</h6>
                          <span className=' text-white__second text-sm'>Show all</span>
                        </div>
                        <div className="flex flex-row gap-4">
                          <div className=" rounded-3xl px-5 flex justify-center items-center py-1 border border-on__surface">All</div>
                          <div className="rounded-3xl px-5 flex justify-center items-center py-1 border border-on__surface">Unread</div>
                        </div>
                        <span className='font-bold text-sm text-left'>Today</span>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className='text-left'><span className='font-bold'>Taylor Covington</span> starting following you.</div>
                            <span className='text-left text-sm'>1 hours ago</span>
                          </div>

                        </div>
                        <div className="flex flex-row gap-4 justify-start border-b pb-2 border-b-transparent hover:border-b-primary transition-all duration-200">
                          <div className="overflow-hidden  rounded-lg">
                            <Image
                            src={Samson}
                            alt='avatar'
                            width={44}
                            height={44}
                            className=''/>
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
          </div>
        </div>

      </div>
      {
        ["/", "/HomepageSpaciel", "/HomepageV2", "/Marketplace"].includes(router) ? <>

        </> :
          <>
            <div className='page-title-area'>
              <h1 className='page-title'>{router}</h1>
              <div className='flex flex-row items-center gap-3'>
                <h5 className='text-white__second'>Home /</h5>
                <h5 className='text-white__second'>{router}</h5>
                <h5>Explore-1</h5>
              </div>
            </div>
          </>
      }

    </div >


    </>


  )
}

export default Navbar