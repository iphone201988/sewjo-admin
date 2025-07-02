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

      {isPopupOpen && <AddNewPrizePopup onClose={handleClosePopup} />}
    </div>
  )
}

export default Challenge
