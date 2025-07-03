import React from 'react';

const RecentActivityBox = ({ activity }) => {
  const getActivityDetails = () => {
    if (activity.type === 1) {
      // Type 1: Report activity
      const reporter = activity.reporter ? activity?.reporter?.displayName : 'Anonymous';
      return {
        label: 'Report',
        subLabel: `by ${reporter}`,
        // description: activity?.reason || activity.description,
        description: activity?.reason !=="Other" ? activity?.reason: activity.description,
        time: new Date(activity.createdAt).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, day: '2-digit', month: 'short', year: 'numeric' }),
      };
    } else if (activity.type === 2) {
      // Type 2: Pattern request activity
      const updatedBy = activity?.updatedBy?.displayName;
      return {
        label: 'Pattern Request',
        subLabel: `Requested ${activity.field} change`,
        description: `Requested: ${activity.field} change to pattern ${activity.patternId}`,
        time: new Date(activity.createdAt).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, day: '2-digit', month: 'short', year: 'numeric' }),
      };
    }
    return { label: '', subLabel: '', description: '', time: '' };
  };

  const { label, subLabel, description, time } = getActivityDetails();

  return (
    <div className='bg-[#F9FAFB] py-[16px] px-[24px] rounded-[20px] mt-[14px] max-md:p-[16px]'>
      <div className="flex items-center gap-[16px] max-sm:flex-col max-sm:items-start">
        <button className='bg-[#FFF2D0] border border-[#FFCE4E] px-[10px] py-[6px] rounded-[32px] font-semibold text-[12px] text-[#111111]'>
          {label}
        </button>
        <p className='text-[12px] text-[#6D6D6D] font-semibold'>{subLabel}</p>
      </div>
      <p className='text-[12px] my-[4px] font-semibold'>{description}</p>
      <span className='text-[12px] text-[#7E7E7E] font-medium'>{time}</span>
    </div>
  );
};

export default RecentActivityBox;