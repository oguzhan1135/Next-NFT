import TodaysPick from '@/Components/TodaysPick/page'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Explore = () => {
  return (
      <div className="content">
        <div className="content-container">
          <div className='flex flex-col lg:flex-row items-center justify-between gap-2'>
            <div className="flex flex-row gap-3 items-center flex-wrap">
              <div className=" dropdown-select">
                <span>All Categories</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>Buy Now</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>All Items</span>
                <FaChevronDown />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className=" dropdown-select">
                <span>All Artworks</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>Sort By</span>
                <FaChevronDown />
              </div>

            </div>
          </div>
          <TodaysPick />
        </div>
      </div>

  )
}
export default Explore