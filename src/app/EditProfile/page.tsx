import Image from 'next/image'
import React from 'react'
import Avatar from '/public/images/avatar/avt-author-tab-3.svg'
import Option__1 from '/public/images/other/option1_bg_profile.svg'
import Option__2 from '/public/images/other/option2_bg_profile.svg'
import Link from 'next/link'
import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa'

const EditProfile = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row gap-20 items-start justify-center pt-16 max-w-10xl">
                <div className="flex flex-col gap-5 items-start mx-auto max-w-[350px]">
                    <div className="rounded-[20px] p-5 flex flex-col gap-5 max-h-max bg-on__surface__dark my-0 mx-auto">
                        <div className="overflow-hidden rounded[20px]">
                            <Image
                                src={Avatar}
                                alt='avatar'
                                className='w-full'
                            />
                        </div>
                        <div className="button w-full">
                            Upload New Photo
                        </div>
                        <div className="button w-full">
                            Delete
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-1 w-full">
                    <div className="flex flex-col gap-5">
                        <span className='text-xl font-bold'>Choiseyour Cover image</span>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <div className="flex justify-center items-center rounded-lg overflow-hidden max-h-28 py-7 m-auto w-full border border-black__write">
                                <div className="button white-b">
                                    Upload file
                                </div>
                            </div>
                            <div className="gradiant-border flex justify-center items-center rounded-lg overflow-hidden max-h-28 py-7 m-auto w-full border border-black__write">
                                <Image
                                    src={Option__1}
                                    alt='option-1'
                                    className='w-full'
                                />
                            </div>
                            <div className="flex justify-center items-center rounded-lg overflow-hidden max-h-28 py-7 m-auto w-full border border-black__write">
                                <Image
                                    src={Option__2}
                                    alt='option-1'
                                    className='w-full'
                                />
                            </div>
                        </div>
                    </div>

                    <form className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                        <div className="flex flex-col gap-6">
                            <h6 className="text-xl font-bold">Account info</h6>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="display-name">Display Name</label>
                                <input type="text" placeholder='Trista Francis' name='display' id='display-name' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="custom-url">Custom URL</label>
                                <input type="text" placeholder='Axies.Trista Francis.com/' name='custom-url' id='custom-url' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Trista Francis' name='email' id='email' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="display-name">Bio</label>
                                <textarea className='p-3 bg-transparent rounded-md border border-black__write' name="bio" id="bio" cols={30} rows={6}></textarea>
                            </div>
                            <div className="button white-b w-max">
                                <Link href={"/"}>Update Profile</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h6 className="text-xl font-bold">Your Social media</h6>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="facebook">Facebook</label>
                                <input type="text" placeholder='Facebook username' name='facebook' id='facebook' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <Link href={"/"}>
                                <div className="button social w-max">
                                    <FaFacebook />
                                    <span>Connect To Facebook</span>
                                </div>
                            </Link>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="twitter">Twitter</label>
                                <input type="text" placeholder='Trista Francis' name='twitter' id='twitter' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <Link href={"/"}>
                                <div className="button social w-max">
                                    <FaTwitter />
                                    <span>Connect To Twitter</span>
                                </div>
                            </Link>
                            <div className="flex flex-col w-full gap-5">
                                <label htmlFor="discord">Discord</label>
                                <input type="text" placeholder='Discord username' name='discord' id='discord' className='p-3 bg-transparent rounded-md border border-black__write' />
                            </div>
                            <Link href={"/"}>
                                <div className="button social w-max">
                                    <FaDiscord />
                                    <span>Connect To Discord</span>
                                </div>
                            </Link>

                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default EditProfile