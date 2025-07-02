import React from 'react'

const NoRecentActivity = () => {
  return (
    <div className='h-full flex justify-center items-center flex-col mt-[-40px]'>
      <img className='mx-auto' src="src/assets/no-recent-activity.png" alt="" />
      <p className='text-[22px] text-center text-[#BABABA] font-semibold'>No recent activity available </p>
    </div>
  )
}

export default NoRecentActivity
