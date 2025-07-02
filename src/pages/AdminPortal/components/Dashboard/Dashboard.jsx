import React from 'react'
import Header from '../Header/Header'
import InfoBox from './components/InfoBox'
import RecentActivityBox from './components/RecentActivityBox'
import NoRecentActivity from './components/NoRecentActivity'
import QuickActions from './components/QuickActions'

const Dashboard = () => {
  return (
    <div>
        <Header/>
      
      <div className="">
        <InfoBox/>
      </div>

    <div className="mt-[40px] flex gap-[40px] max-lg:gap-[24px] max-md:flex-col">
        <div className="left bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[520px] min-h-[550px] border border-[#B5B5B5] rounded-[30px] p-[24px]">
            <h4 className='flex gap-[10px] items-center text-[22px] font-semibold'><img src="src/assets/recent-activity.png" alt="" />Recent Activity </h4>
            {/* <NoRecentActivity/> */}

            <RecentActivityBox/>
            <RecentActivityBox/>
            <RecentActivityBox/>
        </div>
        <div className="right bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[520px] border border-[#B5B5B5] rounded-[30px] p-[24px]">
            <h4 className='flex gap-[10px] items-center text-[22px] font-semibold'>Quick Actions </h4>

            <QuickActions/>
        </div>
    </div>

    </div>
  )
}

export default Dashboard
