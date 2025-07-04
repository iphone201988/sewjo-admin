import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddPrizesMutation, useGetActiveChallengeQuery } from '../../../../../api';
import { X } from 'lucide-react';

const AddNewPrizePopup = ({ onClose, setShowAddToast }) => {
  const [addPrizes, { isLoading: loading }] = useAddPrizesMutation();
  const { data: activeChallenge } = useGetActiveChallengeQuery();
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setValue('file', selectedFile); // Update form value for validation
    setFileError(''); // Clear file error on new selection
  };

  const onSubmit = async (data) => {
    if (!file) {
      setFileError('Logo is required');
      return;
    }

    const formData = new FormData();
    formData.append('challengeId', data.challengeId);
    formData.append('week', data.week);
    formData.append('prizeDetails', data.prizeDescription);
    formData.append('brand', data.brand);
    formData.append('isActive', true);
    formData.append('file', file);

    try {
      const res = await addPrizes(formData).unwrap();
      console.log(res);
      if (res) {
        onClose(); // close popup after success
        setShowAddToast(true);
        setTimeout(() => {
          setShowAddToast(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[rgba(0,0,0,0.48)] backdrop-blur-[3px] fixed overflow-auto top-0 left-0 w-full h-full z-[99999999] p-[20px] max-sm:h-auto">
      <div className="bg-white w-full px-[24px] py-[33px] rounded-[20px] max-w-[448px]">
        <div className="flex items-center justify-between mb-[20px]">
          <h5 className="text-[24px] font-semibold">Add New Prize</h5>
          <button onClick={onClose} className="cursor-pointer">
            <img src="src/assets/cross-icon.png" alt="Close" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[14px] max-sm:gap-[10px]">
          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Logo
            {file ? (
              <div className="relative w-full border border-dashed border-[#9F9D9E] rounded-[6px] p-[12px]">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full max-h-[100px] object-contain rounded-[6px]"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setValue('file', null);
                    setFileError('');
                  }}
                  className="absolute top-[6px] right-[6px] bg-white border border-gray-300 rounded-full p-[2px]"
                >
                  <X size={18} className="text-black" />
                </button>
              </div>
            ) : (
              <label className="flex items-center flex-col justify-center gap-[10px] border border-dashed border-[#9F9D9E] rounded-[6px] p-[24px] cursor-pointer">
                <img src="src/assets/upload-pic.png" alt="Upload" />
                <p className="font-semibold text-[#9F9D9E]">Upload Logo</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
            {fileError && (
              <p className="text-red-500 text-[12px] mt-[4px]">{fileError}</p>
            )}
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Brand
            <input
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              type="text"
              placeholder="Enter brand"
              {...register('brand', {
                required: 'Brand is required',
                maxLength: {
                  value: 20,
                  message: 'Brand cannot exceed 20 characters',
                },
              })}
            />
            {errors.brand && (
              <p className="text-red-500 text-[12px] mt-[4px]">{errors.brand.message}</p>
            )}
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Prize Description
            <textarea
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              placeholder="Enter prize description"
              rows={1}
              {...register('prizeDescription', {
                required: 'Prize description is required',
                maxLength: {
                  value: 40,
                  message: 'Prize description cannot exceed 40 characters',
                },
              })}
            ></textarea>
            {errors.prizeDescription && (
              <p className="text-red-500 text-[12px] mt-[4px]">{errors.prizeDescription.message}</p>
            )}
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Challenge
            <select
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              {...register('challengeId', {
                required: 'Challenge is required',
              })}
            >
              <option value="">Select Challenge</option>
              <option value={activeChallenge?.data?.challenge?._id}>
                {activeChallenge?.data?.challenge?.title}
              </option>
            </select>
            {errors.challengeId && (
              <p className="text-red-500 text-[12px] mt-[4px]">{errors.challengeId.message}</p>
            )}
          </label>

          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Week
            <select
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              {...register('week', {
                required: 'Week is required',
              })}
            >
              <option value="">Select week</option>
              {[...Array(7)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            {errors.week && (
              <p className="text-red-500 text-[12px] mt-[4px]">{errors.week.message}</p>
            )}
          </label>

          <button
            type="submit"
            disabled={loading}
            className="text-[#fff] font-semibold bg-[#32302F] rounded-[5px] w-full p-[10px] text-center hover:bg-[#474747] cursor-pointer"
          >
            {loading ? 'Adding...' : 'Add Prize'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPrizePopup;