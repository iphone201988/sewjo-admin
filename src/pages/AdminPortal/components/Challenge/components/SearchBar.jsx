import React from 'react'
import SearchIcon from "../../../../../assets/search-icon.png";
import WhitePlusIcon from "../../../../../assets/white-plus-icon.png";

const SearchBar = ({ handleOpenPopup,setSearch }) => {
  return (
    <div className='flex items-center gap-[32px] mb-[48px]'>
      <div className="bg-white rounded-[20px] w-full max-w-[880px] flex items-center gap-[10px] px-[28px] py-[23px] ">
        <img src={SearchIcon} alt="" />
        <input className='w-full' type="text" placeholder='Search Prizes' onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <button
        onClick={handleOpenPopup}
        className="
    w-[200px] 
    max-sm:w-full
    justify-center 
    text-[16px] 
    sm:text-[18px] 
    flex 
    items-center 
    gap-[8px] 
    sm:gap-[10px]
    text-white 
    cursor-pointer 
    bg-[#32302F] 
    hover:bg-[#000000] 
    px-[12px] 
    sm:px-[14px] 
    py-[8px] 
    sm:py-[10px] 
    rounded-[10px]
  "
      >
        Add Prizes
        <img src={WhitePlusIcon} alt="" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
      </button>

    </div>
  )
}

export default SearchBar
