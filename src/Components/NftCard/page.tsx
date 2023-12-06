/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../../app/globals.css';
import Image from 'next/image';
import Hamlet from '../../../public/images/NFT/hamlet-nft.svg';
import FreddieCarpanter from '../../../public/images/avatar/freddie.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FireLogo from "../../../public/images/icon/siyaz-logo.svg";

const NftCard = () => {
    return (
        <div className='flex flex-col gap-3 bg-black__write p-5 min-w-full rounded-[20px]'>

            <div className="flex overflow-hidden rounded-[20px] w-full relative">
                <Image
                    src={Hamlet}
                    alt='deneme'
                    style={{ width: "100%" }}
                />
                <div className='absolute top-2 right-2 bg-dark__bg text-on__surface flex items-center gap-1 flex-row px-3 py-1 rounded-xl'>
                    <FontAwesomeIcon icon={faHeart} className='navbar-item-icon' />
                    <span>100</span>
                </div>

                <div className='absolute bottom-2 right-1/2 translate-x-1/2 w-max bg-dark__bg flex flex-row item-center justify-center gap-3 px-3 py-1 rounded-lg'>
                    <Image
                        src={FireLogo}
                        width={16}
                        height={16}
                        alt='logo'
                    />
                    <span className='font-bold'>07 : 15 : 21 : 52</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className='text-lg font-bold'>Hamlet-Card</span>
                <span className='bg-primary rounded-xl px-3 py-1 text-sm text-on__surface font-bold'>ETH</span>
            </div>

            <div className="flex justify-between items-start">
                <div className="flex flex-row items-start gap-3">
                    <div className="overflow-hidden rounded-md">
                        <Image
                            src={FreddieCarpanter}
                            alt='freddie'
                            layout='responsive'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className='font-bold text-white__second'>Creator</span>
                        <span className='font-bold'>Freddie Carpanter</span>
                    </div>
                </div>
                <div className="flex flex-col text-right">
                    <span className='text-white__second'>Current Bid</span>
                    <span className='text-lg font-bold text-on__surface'>4.89 ETH</span>
                </div>
            </div>
        </div>
    );
}

export default NftCard;
