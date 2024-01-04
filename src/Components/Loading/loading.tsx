import React from 'react'
import Placeholder from '@/../public/images/other/placeholder.svg'
import Image from 'next/image';
import Link from 'next/link';
interface ComponentType {
  component: string;
}

const Loading: React.FC<ComponentType> = ({ component }) => {
  return (
    <>
      {
        component === "nft-card" ?
          <>
            <div className='flex flex-col gap-4 bg-black__write p-5  rounded-[20px] nft-card' >
              <div className="flex overflow-hidden rounded-[20px] w-full relative nft-image">

                <Image
                  src={Placeholder}
                  alt='deneme'
                  width={500}
                  height={500}
                  priority
                  style={{ width: "100%" }}
                  className='bg-white__second animate-pulse'
                />

              </div>

              <div className="flex justify-between items-center">
                <span className=' bg-white__second animate-pulse h-2 w-24 rounded-lg'></span>
                <span className='bg-white__second animate-pulse h-2 w-6 rounded-lg'></span>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex flex-row items-start gap-3">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={Placeholder}
                      alt='freddie'
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col gap-0">
                    <span className='font-bold text-white__second'>Creator</span>
                    <span className='bg-white__second animate-pulse h-2 w-20 rounded-lg'></span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span className='text-white__second'>Current Bid</span>
                  <span className='bg-white__second animate-pulse h-2 w-6 rounded-lg'></span>
                </div>
              </div>
            </div >
          </>
          : component === "seller" ?
            <>
              <div className='flex text-on__surface py-3 relative flex-col items-center justify-center gap-3 '>
                <div className="overflow-hidden rounded-[40%]">
                  <Image
                    src={Placeholder}
                    width={150}
                    height={150}
                    alt='fredie' />
                </div>

              </div>
              <div className="flex flex-col gap-2 text-center">
                <Link className=' bg-white__second h-2 w-10 animate-pulse rounded-lg' href={"/"}></Link>
                <span className='bg-white__second h-2 w-4 animate-pulse rounded-lg'></span>
              </div>
            </>
            : component === "category" ?
              <>
                <div className="bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px]">
                  <span className='bg-white__second h-2 w-10 animate-pulse rounded-lg'></span>
                  <Image
                    src={Placeholder}
                    alt='music'
                    className='w-full animate-pulse '
                  />
                </div>
              </>
              : component === "collection" ?
                <>
                  <div className='flex flex-col gap-3 bg-black__write p-5 rounded-[20px]' >
                    <div className="flex flex-row justify-between items-start">
                      <div className="flex flex-row gap-3 items-center">
                        <div className="p-2  relative">
                          <div className="overflow-hidden rounded-3xl">
                            <Image
                              src={Placeholder}
                              width={80}
                              height={80}
                              alt='fredie' />

                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className='bg-white__second h-2 w-10 animate-pulse'></span>
                          <div className="flex flex-row gap-1 items-center">
                            <span className='bg-white__second h-2 w-10 animate-pulse rounded-lg'></span>
                            <span className='bg-white__second h-2 w-10 animate-pulse rounded-lg'></span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="flex flex-row gap-3  w-full">
                      <div className="overflow-hidden rounded-[20px]">
                        <Image
                          src={Placeholder}
                          alt='leftColection'
                          className=' w-full h-full  animate-pulse'

                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 w-auto">
                          <div className="overflow-hidden rounded-[20px]">
                            <Image
                              src={Placeholder}
                              alt='topLeftCollection'
                              className=' w-full  animate-pulse'
                            />
                          </div >
                          <div className="overflow-hidden rounded-[20px]">
                            <Image
                              src={Placeholder}
                              alt='topRightCollection'
                              className=' w-full  animate-pulse'
                            />
                          </div >

                        </div>
                        <div className="overflow-hidden rounded-[20px]">
                          <Image
                            src={Placeholder}
                            alt='bottomCollection'
                            height={200}
                            className=' w-full  animate-pulse'
                          />
                        </div >

                      </div>
                    </div>
                  </div >
                </>
                : null
      }
    </>
  )
}

export default Loading