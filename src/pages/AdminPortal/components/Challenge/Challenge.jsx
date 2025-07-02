import React from 'react'
import Header from '../Header/Header'
import SearchBar from './components/SearchBar'
import Prizes from './components/Prizes'
import AddNewPrizePopup from './components/AddNewPrizePopup'

const Challenge = () => {
  return (
    <div>
      <Header />

      <div className="">
        <SearchBar />
      </div>

      <div className="flex flex-wrap justify-start gap-[50px]">
        <Prizes />
        <Prizes />
        <Prizes />
      </div>

      {/* Prize Added popup */}

      <div className="bg-white p-4 sm:p-[18px] flex items-start justify-between w-[90%] sm:w-full max-w-[390px] border border-[#7CDF79] rounded-[10px] fixed right-4 sm:right-6 bottom-6 sm:top-[calc(100vh-120px)] sm:bottom-auto z-50">
        <div className="pr-2">
          <p className='text-[16px] sm:text-[18px] font-semibold'>Prize Added</p>
          <p className='text-[13px] sm:text-[14px] text-[#5C5C5C] font-semibold'>Success! Your new prize is now live.</p>
        </div>
        <button className='cursor-pointer shrink-0'>
          <img className='w-4 sm:w-auto' src="src/assets/cross-icon.png" alt="Close" />
        </button>
      </div>


      {/* Add New Prize popup */}
      {/* this is modal make this function for close */}
      <AddNewPrizePopup />

    </div>
  )
}

export default Challenge
