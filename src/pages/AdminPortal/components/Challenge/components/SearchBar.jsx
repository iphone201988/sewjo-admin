import React from 'react'

const SearchBar = ({ handleOpenPopup }) => {
  return (
    <div className='flex items-center gap-[32px] mb-[48px]'>
      <div className="bg-white rounded-[20px] w-full max-w-[880px] flex items-center gap-[10px] px-[28px] py-[23px] ">
        <img src="src/assets/search-icon.png" alt="" />
        <input className='w-full' type="text" placeholder='Search Prizes' />
      </div>
      <button onClick={handleOpenPopup} className='w-[200px] justify-center text-[18px] flex items-center gap-[10px] text-white cursor-pointer bg-[#32302F] hover:bg-[#000000] px-[14px] py-[10px] rounded-[10px] max-lg:text-[16px]'>
        Add Prizes
        <img src="src/assets/white-plus-icon.png" alt="" />
      </button>
    </div>
  )
}

export default SearchBar
