import React from 'react';

const QuickActionsSkeleton = () => {
  return (
    <div className='flex flex-col gap-[16px] mt-[14px] animate-pulse'>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-[15px] px-[24px] border border-[#A4A4A4] rounded-[10px] bg-white max-md:p-[12px]"
        >
          <div className="flex flex-col gap-[8px] w-full">
            <div className="h-[20px] w-[180px] bg-gray-300 rounded"></div>
            <div className="h-[14px] w-[220px] bg-gray-200 rounded"></div>
          </div>
          {i === 0 && (
            <div className="w-[24px] h-[24px] bg-gray-300 rounded ml-[16px]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickActionsSkeleton;
