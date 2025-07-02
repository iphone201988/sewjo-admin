import React from 'react'

const AddNewPrizePopup = ({ onClose }) => {
  return (
    <div className='flex items-center justify-center bg-[rgba(0,0,0,0.48)] backdrop-blur-[3px] fixed overflow-auto top-0 left-0 w-full h-full z-[99999999] p-[20px] max-sm:h-auto'>
      <div className="bg-white w-full px-[24px] py-[33px] rounded-[20px] max-w-[448px]">
        <div className="flex items-center justify-between mb-[20px]">
          <h5 className='text-[24px] font-semibold'>Add New Prize</h5>

          {/* Close button */}
          <button onClick={onClose} className='cursor-pointer'>
            <img src="src/assets/cross-icon.png" alt="Close" />
          </button>
        </div>

        <div className="flex flex-col gap-[14px] max-sm:gap-[10px]">
          <div className="flex items-center flex-col justify-center gap-[10px] border border-dashed border-[#9F9D9E] rounded-[6px] p-[24px]">
            <img src="src/assets/upload-pic.png" alt="Upload" />
            <p className=' font-semibold text-[#9F9D9E]'>Upload Logo</p>
          </div>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Prize Name/ Description
            <input className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]" type="text" placeholder="Enter prize name" />
          </label>

          <div className="flex gap-[16px] max-sm:flex-col">
            <label className="flex flex-col w-full text-[16px] font-semibold gap-[9px]">
              Active Date
              <input className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]" type="date" />
            </label>
            <label className="flex flex-col w-full text-[16px] font-semibold gap-[9px]">
              Active Time
              <input className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]" type="time" />
            </label>
          </div>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Challenge
            <select className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]">
              <option value="">Select Challenge</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Week
            <select className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]">
              <option value="">Select week</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Time Zone
            <select className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]">
              <option value="">Eastern Time (ET)</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>

          <button className='text-[#fff] font-semibold bg-[#32302F] rounded-[5px] w-full p-[10px] text-center hover:bg-[#474747]'>
            Add Prize
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNewPrizePopup
