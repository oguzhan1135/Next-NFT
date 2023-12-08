import React from 'react'
import Image from 'next/image'
import FreddieCarpanter from '@/../../public/images/avatar/crispin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Seller = () => {
    return (
        <>
            <div className='flex text-on__surface py-3 relative flex-col items-center justify-center gap-3 '>
                <div className="overflow-hidden rounded-[40%]">
                    <Image
                        src={FreddieCarpanter}
                        width={150}
                        height={150}
                        alt='fredie' />
                </div>
                <div className="absolute bottom-2 right-2 rounded-full bg-primary  w-6 h-6 flex items-center justify-center ">
                    <FontAwesomeIcon icon={faCheck} style={{ fontSize: "15px" }} />
                </div>


            </div>
            <div className="flex flex-col gap-2 text-center">
                <Link className='font-bold' href={"/"}>Crispin Berry</Link>
                <span className='font-bold'>214.2 ETH</span>
            </div>
        </>

    )
}

export default Seller