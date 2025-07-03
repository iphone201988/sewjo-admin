import React, { useState } from 'react';
import EditPrizePopup from './EditPrize';
import { useEditPrizesMutation } from '../../../../../api';

const Prizes = ({ detail, handleDelete, setShowEditToast }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [active, setActive] = useState(detail.isActive ||true);
  const [editPrizes] = useEditPrizesMutation();

  const {
    brand,
    logo,
    prizeDetails,
    week,
    createdAt,
    _id
  } = detail;

  const handleToggleActive = async () => {
    try {
      const updatedStatus = !active;
      setActive(updatedStatus);
      await editPrizes({ prizeId: _id, isActive: updatedStatus });
    } catch (err) {
      console.error('Failed to update active status:', err);
      setActive(!active);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div className="bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] w-full max-w-[500px] border border-[#B5B5B5] rounded-[10px] px-[54px] py-[30px] max-lg:p-[20px]">
      <img
        src={logo}
        alt={brand}
        className="mx-auto border border-[#CCCCCC] w-[256px] h-[256px] rounded-[10px] object-cover"
      />

      <div className="flex items-center justify-between mt-[30px] mb-[10px]">
        <p className="text-[18px] font-semibold">{prizeDetails}</p>
        <span className={`text-[12px] font-semibold px-[10px] py-[5px] rounded-[32px] ${active ? 'text-[#1A6537] bg-[#DDFCE8]' : 'text-[#7A7A7A] bg-[#EDEDED]'}`}>
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>

      <p className="text-[14px] font-semibold text-[#41403F] mb-[4px]">Week: {week}</p>
      <p className="text-[12px] text-[#ABABAB] font-semibold">Created: {formatDate(createdAt)}</p>

      <label className="inline-flex items-center justify-between w-full my-[18px] cursor-pointer">
        <span className="mr-[32px] text-[14px] font-semibold">Active</span>
        <input
          type="checkbox"
          checked={active}
          onChange={handleToggleActive}
          className="sr-only peer"
        />
        <div className="relative w-[58px] h-[31px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all dark:border-[#32302F] peer-checked:bg-[#32302F] dark:peer-checked:bg-[#32302F]"></div>
      </label>

      <div className="flex gap-[16px]">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="flex items-center cursor-pointer justify-center gap-[12px] text-[14px] font-semibold text-[#41403F] p-[7px] w-full border border-[#DFDFDF] rounded-[5px] hover:bg-[#F3F3F3]"
        >
          <img src="/src/assets/edit-icon.png" alt="Edit" />
          Edit
        </button>

        <button
          onClick={() => handleDelete(_id)}
          className="w-[45px] h-[45px] flex cursor-pointer items-center justify-center border border-[#DFDFDF] rounded-[5px] hover:bg-[#F3F3F3]"
        >
          <img src="/src/assets/trash-icon.png" alt="Delete" />
        </button>
      </div>

      {isPopupOpen && (
        <EditPrizePopup
          onClose={() => setIsPopupOpen(false)}
          data={detail}
          selectedId={_id}
          setShowEditToast={setShowEditToast}
        />
      )}
    </div>
  );
};

export default Prizes;
