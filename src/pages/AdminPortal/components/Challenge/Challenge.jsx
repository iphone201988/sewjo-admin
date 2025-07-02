import React, { useState } from 'react'
import Header from '../Header/Header'
import SearchBar from './components/SearchBar'
import Prizes from './components/Prizes'
import AddNewPrizePopup from './components/AddNewPrizePopup'

const Challenge = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Header />

      <div className="mb-6">
        <SearchBar handleOpenPopup={handleOpenPopup} />
        <button
          onClick={handleOpenPopup}
          className="mt-4 text-white font-semibold bg-[#32302F] rounded-[5px] px-4 py-2 hover:bg-[#474747]"
        >
          Add Prize
        </button>
      </div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-[20px] gap-y-[20px] sm:gap-x-[50px] sm:gap-y-[30px] w-full">
        <Prizes />
        <Prizes />
        <Prizes />
      </div>



      {/* Success Toast */}
      <div className="bg-white p-4 sm:p-[18px] flex items-start justify-between w-[90%] sm:w-full max-w-[390px] border border-[#7CDF79] rounded-[10px] fixed right-4 sm:right-6 bottom-6 sm:top-[calc(100vh-120px)] sm:bottom-auto z-50">
        <div className="pr-2">
          <p className='text-[16px] sm:text-[18px] font-semibold'>Prize Added</p>
          <p className='text-[13px] sm:text-[14px] text-[#5C5C5C] font-semibold'>Success! Your new prize is now live.</p>
        </div>
        <button className='cursor-pointer shrink-0'>
          <img className='w-4 sm:w-auto' src="src/assets/cross-icon.png" alt="Close" />
        </button>
      </div>

      {isPopupOpen && <AddNewPrizePopup onClose={handleClosePopup} />}
    </div>
  )
}

export default Challenge
