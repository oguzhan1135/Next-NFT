import React from 'react';

interface ContentHeaderProps {
  title: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ title }) => {
  return (
    <div className='flex justify-between items-center gap-2'>
      <h2 className='font-bold text-[36px]'>{title}</h2>
      <div className="flex flex-col gap-1">
        <h5>EXPLORE MORE</h5>
        <span className='border-critical border-2 w-full h-1'></span>
      </div>
    </div>
  );
};

export default ContentHeader;
