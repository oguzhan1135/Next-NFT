import TodaysPick from '@/Components/TodaysPick/page'

import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const ExplorePage = () => {
  return (
    <>
      <div className="content">

        <div className="content-container">
          <div className='flex flex-col lg:flex-row items-center justify-between gap-2'>
            <div className="flex flex-row gap-3 items-center flex-wrap">
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FaChevronDown />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FaChevronDown />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FaChevronDown />
              </div>

            </div>
          </div>
          <TodaysPick />
        </div>
      </div>




    </>

  )
}

export default ExplorePage