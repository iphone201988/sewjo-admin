import React from 'react';

const RecentActivitySkeleton = () => {
  return (
    <div className="bg-white p-[24px] rounded-[20px] shadow-sm">
      <div className="flex items-center gap-3 mb-[18px]">
        <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
        <div className="h-[16px] bg-gray-300 rounded w-[120px]"></div>
      </div>

      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className="bg-[#F9FAFB] py-[16px] px-[24px] rounded-[20px] mt-[14px] animate-pulse"
        >
          <div className="flex items-center gap-[16px] mb-2">
            <div className="h-[24px] w-[110px] bg-[#FFF2D0] rounded-[32px]"></div>
            <div className="h-[14px] w-[140px] bg-gray-300 rounded"></div>
          </div>
          <div className="h-[14px] w-[240px] bg-gray-300 rounded mb-2"></div>
          <div className="h-[12px] w-[80px] bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivitySkeleton;
