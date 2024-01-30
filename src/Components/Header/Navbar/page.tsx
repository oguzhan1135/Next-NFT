import React from 'react'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";
import Searchbar from '@/Components/Header/SearchBar/page';
import MobileNavbarMenu from '../MobilNavbarMenu/page';
import { GoTriangleUp } from "react-icons/go";

interface Router {
  router: string;
  routerElement:React.ReactNode;
}
const Navbar: React.FC<Router> = ({ router,routerElement }) => {
  const marketplacePage = '/Marketplace';
  const homepageSpacielPage = '/HomepageSpaciel';

  return (
    <>
      <div id='navbar' className={`  navbar-header  ${(["/", "/HomepageSpaciel", "/HomepageV2", "/Marketplace"].includes(router)) ? 'homepage' : 'navbar-v2'}`}>
        <div className='navbar-container '>
          <div className={`${router === marketplacePage || router === homepageSpacielPage ? 'v2-w-container' : 'main-container'}`}>
            <div className='navbar relative'>
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
                    <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
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
                  <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
                    <div className="sub-menu">
                      <Link href={"/Explore"}><span className='sub-menu-line'></span> Explore</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Activity <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                  <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Activity-1</Link>
                      <Link href={"/"}><span className='sub-menu-line'></span> Activity-2</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Community <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                  <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Community-1</Link>
                      <Link href={"/"}><span className='sub-menu-line'></span> Community-2</Link>
                    </div>
                  </div>
                </li>
                <li className='relative group'><Link href={"/"}>Pages <FaChevronDown />
                </Link>
                  <div className="sub-menu-area">
                  <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
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
                  <span className='absolute z-[150] top-[-20px] text-on__surface text-4xl'><GoTriangleUp/></span>
                    <div className="sub-menu">
                      <Link href={"/"}><span className='sub-menu-line'></span> Contact</Link>
                    </div>
                  </div>
                </li>
              </ul>
              <Searchbar />
              <MobileNavbarMenu />

            </div>

          </div>

        </div>
        {
          ["/", "/HomepageSpaciel", "/HomepageV2", "/Marketplace"].includes(router) ? <>

          </> :
            <>
              {routerElement}
            </>
        }

      </div >


    </>


  )
}

export default Navbar