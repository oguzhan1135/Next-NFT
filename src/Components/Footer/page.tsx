import React from 'react'
import { FaFacebook, FaGoogle, FaTwitch, FaTwitter } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import Link from 'next/link';

interface Router {
    router: string;
}
const Footer: React.FC<Router> = ({ router }) => {
    return (
        <>
            {
                router !== "/Marketplace" ?
                    <>
                        <div className='flex justify-center w-full relative 3xl:fixed bottom-0 bg-on__surface dark:bg-footer__bg py-20 px-2 '>
                            <div className="container">
                                <div className="grid grid-cols-1 xl:grid-cols-4 w-full gap-5">
                                    <div className="flex flex-col gap-10">
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
                                                <h1 className='dark:text-on__surface text-on__surface__dark' style={{ fontSize: "36px", fontWeight: "700" }}>Siyaz</h1>
                                            </Link>
                                        </div>
                                        <p className='dark:text-on__surface text-on__surface__dark'>Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                                        <div className="flex flex-row items-center justify-start gap-3">
                                            <Link href={"/"} className="flex justify-center items-center p-4 text-white__second hover:bg-primary hover:text-on__surface transition-all duration-300 dark:text-on__surface text-xl dark:bg-black__write bg-gray rounded-md">
                                                <FaFacebook />
                                            </Link>
                                            <Link href={"/"} className="flex justify-center items-center p-4 text-white__second hover:bg-primary hover:text-on__surface transition-all duration-300 dark:text-on__surface text-xl dark:bg-black__write bg-gray rounded-md">
                                                <FaTwitter />
                                            </Link>
                                            <Link href={"/"} className="flex justify-center items-center p-4 text-white__second hover:bg-primary hover:text-on__surface transition-all duration-300 dark:text-on__surface text-xl dark:bg-black__write bg-gray rounded-md">
                                                <FaGoogle />
                                            </Link>
                                            <Link href={"/"} className="flex justify-center items-center p-4 text-white__second hover:bg-primary hover:text-on__surface transition-all duration-300 dark:text-on__surface text-xl dark:bg-black__write bg-gray rounded-md">
                                                <FaTwitch />

                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid col-span-2 p-0 xl:px-20">
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3 text-on__surface__dark dark:text-on__surface'>My Account</span>
                                               <Link href={"/Author"} className='text-on__surface__dark dark:text-on__surface'>Authors</Link>
                                               <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Collection</Link>
                                               <Link href={"/Author"} className='text-on__surface__dark dark:text-on__surface'>Authors Profile</Link>
                                               <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Create Collection</Link>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3 text-on__surface__dark dark:text-on__surface'>Resources</span>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Help & Support</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Live Auction</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Item Details</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Activity</Link>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3 text-on__surface__dark dark:text-on__surface'>Company</span>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>About Us</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Contact Us</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Our Blog</Link>
                                                <Link href={"/"} className='text-on__surface__dark dark:text-on__surface'>Discover</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <span className='font-bold text-lg text-on__surface__dark dark:text-on__surface'>Subscribe Us</span>
                                        <div className="flex  justify-between items-center border-2 rounded-md border-white__second text-on__surface">
                                            <input type="text" placeholder='info@yourgmail.com' style={{ outline: "none", backgroundColor: "transparent", paddingLeft: "20px" }} />
                                            <button type="submit" className='py-3 px-4 bg-primary text-on__surface rounded-md'>
                                                <BsFillSendFill />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </> :
                    <>
                    </>
            }

        </>


    )
}

export default Footer