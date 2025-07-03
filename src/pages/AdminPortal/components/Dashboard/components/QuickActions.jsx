import React from 'react'

const QuickActions = ({ handleOpenPopup, dashboardData }) => {
  return (
    <div className='flex flex-col gap-[16px] mt-[14px]'>
      <div className="flex items-center justify-between py-[15px] px-[24px] border border-[#A4A4A4] rounded-[10px] max-md:p-[12px]">
        <div className="">
          <p className='text-[18px] font-semibold max-md:text-[16px]'>Add New Prize</p>
          <p className='text-[14px] text-[#7A7A7A] font-semibold'>Upload a new prize  to challenges.</p>
        </div>
        <button onClick={handleOpenPopup} className=' cursor-pointer'><img src="src/assets/plus-icon.png" alt="" /></button>
      </div>

      <div className="flex items-center justify-between py-[15px] px-[24px] border border-[#A4A4A4] rounded-[10px] max-md:p-[12px]">
        <div className="">
          <p className='text-[18px] font-semibold max-md:text-[16px]'>Review Patterns Requests</p>
          <p className='text-[14px] text-[#7A7A7A] font-semibold'>{dashboardData?.pendingPattern || "0"} pending requests need attention</p>
        </div>

      </div>

      <div className="flex items-center justify-between py-[15px] px-[24px] border border-[#A4A4A4] rounded-[10px] max-md:p-[12px]">
        <div className="">
          <p className='text-[18px] font-semibold max-md:text-[16px]'>Handle Reported Accounts</p>
          <p className='text-[14px] text-[#7A7A7A] font-semibold'>{dashboardData?.totalReviewedAccount || "0"} Reported Accounts</p>
        </div>

      </div>
    </div>
  )
}

export default QuickActions
