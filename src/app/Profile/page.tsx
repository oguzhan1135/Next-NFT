'use client'
import React, { useEffect, useState } from 'react'
import Creater from '/public/images/avatar/avt-author-tab-3.svg'
import Image from 'next/image'
import Link from 'next/link'
import TodaysPick from '@/Components/GridComponents/TodaysPick/page'
import { FaCaretDown, FaCaretUp, FaCopy, FaFacebook, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa'
import { NftProductContext } from '@/Context/NftCardContext'
import { useRouter } from 'next/navigation'
import FilterProductList from '@/Components/FilterProductList/page'

const Profile = () => {
    const { loggedUser } = NftProductContext();
    const [filterTab, setFilterTab] = useState("All")
    const router = useRouter();
    useEffect(() => {
        if (loggedUser.name === "") {
            router.push("/Login")
        }
    }, []);

    return (
        <>
            <div className="flex flex-col gap-[60px] pb-20 ">
                <div className="flex flex-col bg-author-card p-0 pt-10 rounded-[20px] bg-cover w-full max-w-screen-2xl mt-20 relative">
                    <div className="grid grid-cols-9">
                        <div className="grid col-span-2 relative">
                            <div className="w-full h-auto overflow-hidden rounded-[20px] absolute left-10">
                                <Image
                                    src={Creater}
                                    alt='avatar'
                                    width={1000}
                                    height={1000}
                                    className='scale-105'
                                />
                            </div>
                        </div>
                        <div className="grid col-span-7 ml-20">
                            <div className="w-full flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg text-secondary">Profile</span>
                                    <div className="flex row gap-6 items-center pr-10">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <Link href="/" className=' bg-on__surface rounded-xl flex justify-center items-center p-3 text-dark__bg'><FaFacebook /></Link>
                                            <Link href="/" className=' bg-on__surface rounded-xl flex justify-center items-center p-3 text-dark__bg'><FaTwitter /></Link>
                                            <Link href="/" className=' bg-on__surface rounded-xl flex justify-center items-center p-3 text-dark__bg'><FaGoogle /></Link>
                                            <Link href="/" className=' bg-on__surface rounded-xl flex justify-center items-center p-3 text-dark__bg'><FaTwitch /></Link>
                                        </div>
                                        <div className="button white-b text-on__surface">
                                            Follow
                                        </div>

                                    </div>

                                </div>
                                <h4 className="text-4xl font-bold text-on__surface">
                                    {loggedUser.name}
                                </h4>
                                <p className="max-w-[500px] text-on__surface">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Laborum obcaecati
                                    dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>

                                <div className="p-3 rounded-full text-black__write bg-on__surface items-center flex gap-[10px] max-w-max my-5 text[#7a798a] hover:bg-primary hover:text-on__surface transition-all duration-200">
                                    <input type="text" className='bg-transparent cursor-pointer p-2 border-none outline-none' placeholder='DdzFFzCqrhshMSx....' />
                                    <span className='text-primary hover:bg-on__surface'><FaCopy /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray dark:bg-black__write rounded-bl-[20px] rounded-br-[20px]">
                        <div className="flex flex-row gap-[15px] mr-auto justify-end flex-wrap relative">

                            <div className='relative flex items-center justify-center'>
                                <span className='author-tab-btn active' onClick={() => setFilterTab("All")}>ALL</span>
                                <span className='absolute bottom-[-12px] left-[16px] text-3xl text-dark__bg'><FaCaretUp /></span>
                            </div>
                            <span className='author-tab-btn' onClick={() => setFilterTab("Art")}>ART</span>
                            <span className='author-tab-btn' onClick={() => setFilterTab("Music")}>MUSIC</span>
                            <span className='author-tab-btn' onClick={() => setFilterTab("Collectibles")}>COLLECTIBLES</span>
                            <span className='author-tab-btn' onClick={() => setFilterTab("Sports")}>SPORTS</span>

                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-8'>
                    <FilterProductList filterTab={filterTab} setFilterTab={setFilterTab}/>
                </div>
            </div>
        </>
    )
}
export default Profile