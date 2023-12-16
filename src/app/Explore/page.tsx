import TodaysPick from '@/Components/TodaysPick/page'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ExplorePage = () => {
  return (
    <>
      <div className="content">
        <div className='page-title-area'>
          <h1 className='page-title'>Explore</h1>
          <div className='flex flex-row items-center gap-3'>
            <h5 className='text-white__second'>Home /</h5>
            <h5 className='text-white__second'>Explore</h5>
            <h5>Explore-1</h5>
          </div>
        </div>
        <div className="content-container">
          <div className='flex flex-col lg:flex-row items-center justify-between gap-2'>
            <div className="flex flex-row gap-3 items-center flex-wrap">
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' />
              </div>
              <div className=" dropdown-select">
                <span>Select-1</span>
                <FontAwesomeIcon icon={faChevronDown} className='navbar-item-icon' />
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