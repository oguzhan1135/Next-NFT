'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
interface Seller {
    id: number;
    image: string;
    name: string;
    total: number;
}
interface DataProps{
    data:Seller
}
const Seller:React.FC<DataProps> = ({data}) => {
    
    return (
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
                <FaCheck size={12}/>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-on__surface__dark dark:text-on__surface text-center">
                <Link className='font-bold' href={"/"}>{data.name}</Link>
                <span className='font-bold'>{data.total} ETH</span>
            </div>
        </>
    )
}

export default Seller