import React, { useState } from 'react';
import { useAddPrizesMutation } from '../../../../../api';
import { X } from "lucide-react"

const AddNewPrizePopup = ({ onClose,setShowAddToast }) => {
  const [addPrizes,{isLoading:loading}] = useAddPrizesMutation();


  const [prizeDescription, setPrizeDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [week, setWeek] = useState('');
  const [challengeId, setChallengeId] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('challengeId', challengeId);
    formData.append('week', week);
    formData.append('prizeDetails', prizeDescription);
    formData.append('brand', brand);
    formData.append('isActive', true);
    formData.append('file', file);

    try {
      const res = await addPrizes(formData).unwrap();
      console.log(res);
      if(res){
      onClose(); // close popup after success
      setShowAddToast(true);
      }
      setTimeout(() => {
      setShowAddToast(false);
    }, 2000);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className='flex items-center justify-center bg-[rgba(0,0,0,0.48)] backdrop-blur-[3px] fixed overflow-auto top-0 left-0 w-full h-full z-[99999999] p-[20px] max-sm:h-auto'>
      <div className="bg-white w-full px-[24px] py-[33px] rounded-[20px] max-w-[448px]">
        <div className="flex items-center justify-between mb-[20px]">
          <h5 className='text-[24px] font-semibold'>Add New Prize</h5>
          <button onClick={onClose} className='cursor-pointer'>
            <img src="src/assets/cross-icon.png" alt="Close" />
          </button>
        </div>

        <div className="flex flex-col gap-[14px] max-sm:gap-[10px]">


          {file ? (
            <div className="relative w-full border border-dashed border-[#9F9D9E] rounded-[6px] p-[12px]">
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full max-h-[100px] object-contain rounded-[6px]"
              />
              <button
                type="button"
                onClick={() => setFile(null)}
                className="absolute top-[6px] right-[6px] bg-white border border-gray-300 rounded-full p-[2px]"
              >
                <X size={18} className="text-black" />
              </button>
            </div>
          ) : (
            <label className="flex items-center flex-col justify-center gap-[10px] border border-dashed border-[#9F9D9E] rounded-[6px] p-[24px] cursor-pointer">
              <img src="src/assets/upload-pic.png" alt="Upload" />
              <p className='font-semibold text-[#9F9D9E]'>Upload Logo</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}


          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Brand
            <input
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              type="text"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Prize Description
            <textarea
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              placeholder="Enter prize description"
              rows={1}
              value={prizeDescription}
              onChange={(e) => setPrizeDescription(e.target.value)}
            ></textarea>
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Challenge
            <select
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              value={challengeId}
              onChange={(e) => setChallengeId(e.target.value)}
            >
              <option value="">Select Challenge</option>
              <option value="684ffb204bdcc18d2bf39256">Challenge 1</option>
              <option value="685926083c9d9aef2d9ad153">What's In Your Stash? #StashConfessions</option>
            </select>
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Week
            <select
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            >
              <option value="">Select week</option>
              {[...Array(7)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Time Zone
            <select
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
            >
              <option value="">Select Time Zone</option>
              <option value="ET">Eastern Time (ET)</option>
              <option value="PT">Pacific Time (PT)</option>
              <option value="CT">Central Time (CT)</option>
              <option value="MT">Mountain Time (MT)</option>
              <option value="GMT">Greenwich Mean Time (GMT)</option>
              <option value="IST">India Standard Time (IST)</option>
            </select>
          </label>

          <button
            onClick={handleSubmit}
            className='text-[#fff] font-semibold bg-[#32302F] rounded-[5px] w-full p-[10px] text-center hover:bg-[#474747] cursor-pointer'
          >
           {loading ? 'Adding...' : 'Add Prize'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPrizePopup;
