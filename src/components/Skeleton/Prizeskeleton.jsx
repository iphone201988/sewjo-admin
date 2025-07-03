import React from 'react';

const PrizesSkeleton = () => {
  return (
    <div className='bg-white animate-pulse shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[500px] border border-[#B5B5B5] rounded-[10px] px-[54px] py-[30px] max-lg:p-[20px]'>
      {/* Image Placeholder */}
      <div className='mx-auto border border-[#CCCCCC] w-[256px] h-[256px] rounded-[10px] bg-gray-200'></div>

      {/* Title + Status */}
      <div className="flex items-center justify-between mt-[30px] mb-[10px]">
        <div className='h-[20px] w-[220px] bg-gray-300 rounded'></div>
        <div className='h-[22px] w-[70px] bg-gray-300 rounded-full'></div>
      </div>

      {/* Week */}
      <div className='h-[16px] w-[100px] bg-gray-200 rounded mb-[6px]'></div>

      {/* Created Date */}
      <div className='h-[14px] w-[150px] bg-gray-200 rounded'></div>

      {/* Switch Placeholder */}
      <div className="flex justify-between items-center w-full my-[18px]">
        <div className='h-[16px] w-[60px] bg-gray-300 rounded'></div>
        <div className="w-[58px] h-[31px] bg-gray-300 rounded-full"></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-[16px]">
        <div className='h-[40px] w-full bg-gray-200 rounded-[5px]'></div>
        <div className='h-[40px] w-[45px] bg-gray-200 rounded-[5px]'></div>
      </div>
    </div>
  );
};

export default PrizesSkeleton;
