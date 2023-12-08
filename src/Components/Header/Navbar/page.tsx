import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCaretUp, faCheck, faChevronDown, faCoffee, faMoon, faSearch, faWallet } from '@fortawesome/free-solid-svg-icons'
import '@/app/style.css'
const Navbar = () => {
  return (
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
          <h1 style={{ fontSize: "36px", fontWeight: "500" }}>Siyaz</h1>
        </Link>
      </div>
      <ul className='items'>
        <li className='relative group'><Link href={"/"}>Home <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/"}><span className='sub-menu-line'></span> Homepage</Link>
              <Link href={"/Homepage-2"}><span className='sub-menu-line'></span>Homepage-2</Link>
              <Link href={"/Marketplace"}><span className='sub-menu-line'></span>Marketplace</Link>
              <Link href={"/Homepage-Spacial"}><span className='sub-menu-line'></span>Homepage (Spaciel)</Link>
            </div>
          </div>
        </li>
        <li className='relative group'><Link href={"/Explore"}>Explore <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/Explore"}><span className='sub-menu-line'></span> Explore</Link>
            </div>
          </div>
        </li>
        <li className='relative group'><Link href={"/"}>Activity <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/"}><span className='sub-menu-line'></span> Activity-1</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Activity-2</Link>
            </div>
          </div>
        </li>
        <li className='relative group'><Link href={"/"}>Community <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/"}><span className='sub-menu-line'></span> Community-1</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Community-2</Link>
            </div>
          </div>
        </li>
        <li className='relative group'><Link href={"/"}>Pages <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/"}><span className='sub-menu-line'></span> Login</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Sign Up</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Create Item</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Profile</Link>
              <Link href={"/"}><span className='sub-menu-line'></span> Edit Profile</Link>
            </div>
          </div>
        </li>
        <li className='relative group'><Link href={"/"}>Contact <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' /></Link>
          <div className="sub-menu-area">
            <div className="sub-menu">
              <Link href={"/"}><span className='sub-menu-line'></span> Contact</Link>
            </div>
          </div>
        </li>

      </ul>
      <div className="navbar-switch-area">
        <FontAwesomeIcon icon={faSearch} style={{ width: "20px" }} />
        <div className='flex flex-row items-center rounded-full px-3 py-3 xl:px-10 gap-3  border-primary border-2'>
          <FontAwesomeIcon icon={faWallet} className='navbar-item-icon' />
          <span className='hidden xl:block'>Wallet Connect</span>
        </div>
        <div className='navbar-switch'>
          <FontAwesomeIcon icon={faBell} className='navbar-item-icon' />
        </div>
        <div className='navbar-switch'>
          <FontAwesomeIcon icon={faMoon} className='navbar-item-icon' />
        </div>
        <FontAwesomeIcon icon={faBars} className='navbar-item-icon  lg:hidden ' />
      </div>
    </div>

  )
}

export default Navbar