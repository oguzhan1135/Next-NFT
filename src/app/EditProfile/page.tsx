import Image from 'next/image'
import React from 'react'
import Avatar from '/public/images/avatar/avt-author-tab-3.svg'
import Option__1 from '/public/images/other/option1_bg_profile.svg'
import Option__2 from '/public/images/other/option2_bg_profile.svg'
import Link from 'next/link'
import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa'
import EditForm from '@/Components/Forms/EditForm/page'

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

                <div className="flex flex-col gap-6 flex-1 w-full pb-20">
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
                    <EditForm />
                </div>


            </div>
        </>
    )
}

export default EditProfile