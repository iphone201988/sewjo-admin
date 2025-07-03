import React, { useState } from 'react';
import Header from '../Header/Header';
import InfoBox from './components/InfoBox';
import RecentActivityBox from './components/RecentActivityBox';
import NoRecentActivity from './components/NoRecentActivity';
import QuickActions from './components/QuickActions';
import AddNewPrizePopup from '../Challenge/components/AddNewPrizePopup';
import { useAdminDashboardQuery } from '../../../../api';
import InfoBoxSkeleton from '../../../../components/Skeleton/InfoBoxSkelton';
import RecentActivitySkeleton from '../../../../components/Skeleton/RecentActivityskelton';
import QuickActionsSkeleton from '../../../../components/Skeleton/QuickActionSkeleton';

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const { data: dashboardData, isLoading } = useAdminDashboardQuery();
  return (
    <div>
      <Header />
      <div className="">
        {
          isLoading ? <InfoBoxSkeleton /> : <InfoBox dashboardData={dashboardData?.data} />
        }

      </div>

      <div className="mt-[40px] flex gap-[40px] max-lg:gap-[24px] max-md:flex-col">
        <div
          className="left bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[520px] min-h-[550px] border border-[#B5B5B5] rounded-[30px] p-[24px] overflow-y-auto"
          style={{ maxHeight: '500px', scrollbarWidth: 'thin', scrollbarColor: '#00000000 #00000000' }}
        >
          <h4 className='flex gap-[10px] items-center text-[22px] font-semibold'><img src="src/assets/recent-activity.png" alt="" />Recent Activity </h4>
          {isLoading ? (
            <RecentActivitySkeleton />
          ) : dashboardData?.data?.recentActivity?.length > 0 ? (
            dashboardData.data.recentActivity.map((activity) => (
              <RecentActivityBox key={activity._id} activity={activity} />
            ))
          ) : (
            <NoRecentActivity />
          )}

        </div>
        <div className="right bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[520px] border border-[#B5B5B5] rounded-[30px] p-[24px]">
          <h4 className='flex gap-[10px] items-center text-[22px] font-semibold'>Quick Actions </h4>
          {isLoading ? (
            <QuickActionsSkeleton />
          ) : (
            <QuickActions handleOpenPopup={handleOpenPopup} dashboardData={dashboardData?.data} />
          )}
        </div>
      </div>

      {isPopupOpen && <AddNewPrizePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Dashboard;