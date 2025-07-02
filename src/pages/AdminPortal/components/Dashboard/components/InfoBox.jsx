import React from 'react'

const InfoBox = () => {
  return (
    <div className='flex gap-[24px] flex-wrap'>
      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px]">
        <div className="text-center ">
            <h6 className='text-[#6A6A6A] text-[15px] font-extrabold'>Current Prizes</h6>
            <h5 className='text-[28px] font-extrabold'>3</h5>
        </div>
        <img src="src/assets/current-prize.png" alt="" />
      </div>

      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px]">
        <div className="text-center ">
            <h6 className='text-[#6A6A6A] text-[15px] font-extrabold'>Pending Requests</h6>
            <h5 className='text-[28px] font-extrabold'>2</h5>
        </div>
        <img src="src/assets/pending-requests.png" alt="" />
      </div>

      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px]">
        <div className="text-center ">
            <h6 className='text-[#6A6A6A] text-[15px] font-extrabold'>Reported Accounts</h6>
            <h5 className='text-[28px] font-extrabold'>3</h5>
        </div>
        <img src="src/assets/reported-accounts.png" alt="" />
      </div>
    </div>
  )
}

export default InfoBox
