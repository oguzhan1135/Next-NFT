'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

interface ContentHeaderProps {
  title: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ title }) => {
  const router = usePathname();
  return (
    <>
      {router !== "/HomepageV2" ? <>
        <div className='flex justify-between w-full items-center gap-2'>
          <h2 className='font-bold text-[36px] text-dark__bg dark:text-on__surface'>{title}</h2>
          <div className="flex flex-col gap-1">
          <h5 className=' text-dark__bg hover:text-primary dark:hover:text-primary dark:text-on__surface transition-all duration-300 cursor-pointer font-bold'>EXPLORE MORE</h5>
            <span className='w-full h-1 bg-gradiant__color'></span>
          </div>
        </div>
      </> :
        <>
          <div className='flex flex-col justify-center w-full items-center gap-2'>
            <h2 className='font-bold text-[36px]'>{title}</h2>
            <div className="flex flex-col gap-1">
              <h5 className=' text-dark__bg dark:text-on__surface hover:text-primary transition-all duration-300 cursor-pointer font-bold'>EXPLORE MORE</h5>
              <span className='border-2 w-full h-1  border-primary bg-primary'></span>
            </div>
          </div>
        </>}

    </>

  );
};

export default ContentHeader;
