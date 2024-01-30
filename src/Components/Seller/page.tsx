'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
interface Seller {
    id: number;
    image: string;
    name: string;
    total: number;
}
interface DataProps {
    data: Seller
}
const Seller: React.FC<DataProps> = ({ data }) => {
    const pathName = usePathname();
    const [otherVersion, setOtherVersion] = useState(false);
    useEffect(() => {
        if (pathName === "/HomepageSpaciel") {
            setOtherVersion(true)
        }
        else {
            setOtherVersion(false)
        }
    }, [])
    return (

        <>
            {
                otherVersion ?
                    <div className="rounded-[14px] h-max p-4 flex-grow  flex items-center justify-start flex-row gap-5 w-full bg-on__surface shadow-nft-card dark:bg-black__write">
                        <div className="relative p-0 w-20 h-20">
                            <div className="overflow-hidden rounded-full">
                                <Image src={data.image} alt='Crispin' width={1000} height={1000} className=' scale-125'/>
                            </div>
                            <div className="absolute bottom-0 right-0 rounded-full bg-primary text-on__surface  w-6 h-6 flex items-center justify-center ">
                                <FaCheck size={12} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-0">
                            <span className='text-lg font-bold'>{data.name}</span>
                            <span className='font-bold'>{data.total} ETH</span>
                        </div>
                    </div>
                    :
                    <>
                        <div className='flex text-on__surface py-3 relative flex-col items-center justify-center gap-3 '>
                            <div className="overflow-hidden rounded-[40%]">
                                <Image
                                    src={data.image}
                                    width={150}
                                    height={150}
                                    alt='fredie' />
                            </div>
                            <div className="absolute bottom-2 right-2 rounded-full bg-primary  w-6 h-6 flex items-center justify-center ">
                                <FaCheck size={12} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-on__surface__dark dark:text-on__surface text-center">
                            <Link className='font-bold' href={"/"}>{data.name}</Link>
                            <span className='font-bold'>{data.total} ETH</span>
                        </div>
                    </>


            }

        </>
    )
}

export default Seller