import React from 'react'

const RecentActivityBox = () => {
  return (
    <div className='bg-[#F9FAFB] py-[16px] px-[24px] rounded-[20px] mt-[14px] max-md:p-[16px]'>
      <div className="flex items-center gap-[16px] max-sm:flex-col max-sm:items-start">
        <button className='bg-[#FFF2D0] border border-[#FFCE4E] px-[10px] py-[6px] rounded-[32px] font-semibold text-[12px] text-[#111111]'>Pattern Request </button>
        <p className='text-[12px] text-[#6D6D6D] font-semibold'>Requested Image</p>
      </div>
      <p className='text-[12px] my-[4px] font-semibold'>Requested: Image change to pattern V2310</p>
      <span className='text-[12px] text-[#7E7E7E] font-medium'>3 hours ago</span>
    </div>
  )
}

export default RecentActivityBox
