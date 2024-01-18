import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaTwitch, FaTwitter } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

interface Router {
    router: string;
}
const Footer: React.FC<Router> = ({ router }) => {
    return (
        <>
            {
                router !== "/Marketplace" ?
                    <>
                        <div className='flex justify-center w-full relative 3xl:fixed bottom-0 bg-footer__bg py-20 px-2 '>
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
                                                <h1 style={{ fontSize: "36px", fontWeight: "500" }}>Siyaz</h1>
                                            </Link>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                                        <div className="flex flex-row items-center justify-start gap-3">
                                            <div className="flex justify-center items-center p-4 text-on__surface text-xl bg-white__second rounded-md">
                                                <FaFacebook />
                                            </div>
                                            <div className="flex justify-center items-center p-4 text-on__surface text-xl bg-white__second rounded-md">
                                                <FaTwitter />
                                            </div>
                                            <div className="flex justify-center items-center p-4 text-on__surface text-xl bg-white__second rounded-md">
                                                <FaGoogle />
                                            </div>
                                            <div className="flex justify-center items-center p-4 text-on__surface text-xl bg-white__second rounded-md">
                                                <FaTwitch />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid col-span-2 p-0 xl:px-20">
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3'>My Account</span>
                                                <span>Authors</span>
                                                <span>Collection</span>
                                                <span>Author Profile</span>
                                                <span>Create Collection</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3'>Resources</span>
                                                <span>Help & Support</span>
                                                <span>Live Auctions</span>
                                                <span>Item Details</span>
                                                <span>Activity</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className='font-bold text-lg mb-3'>Company</span>
                                                <span>About Us</span>
                                                <span>Contact Us</span>
                                                <span>Our Blog</span>
                                                <span>Discover</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <span className='font-bold text-lg'>Subscribe Us</span>
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