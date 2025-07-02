import React from "react";

const InfoBoxSkeleton = () => {
  return (
    <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px] bg-white animate-pulse"
        >
          <div className="flex flex-col gap-2">
            <div className="h-[16px] w-[130px] bg-gray-300 rounded"></div>
            <div className="h-[28px] w-[30px] bg-gray-400 rounded"></div>
          </div>
          <div className="w-[48px] h-[48px] rounded-full bg-[#FFF2D9] flex items-center justify-center">
            <div className="w-[24px] h-[24px] bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxSkeleton;
