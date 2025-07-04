import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditPrizesMutation, useGetActiveChallengeQuery } from '../../../../../api';
import { X } from 'lucide-react';
import Cross from "../../../../../assets/cross-icon.png";
import Upload from "../../../../../assets/upload-pic.png";


const EditPrizePopup = ({ onClose, data, selectedId, setShowEditToast }) => {
  const [editPrizes, { isLoading: loading }] = useEditPrizesMutation();
  const { data: activeChallenge } = useGetActiveChallengeQuery();
  const [file, setFile] = useState(data?.logo);
  const [fileError, setFileError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      prizeDescription: data?.prizeDetails || '',
      brand: data?.brand || '',
      week: data?.week || '',
      challengeId: data?.challengeId || '',
      timeZone: 'PT', // Default to match existing behavior
    },
  });

  useEffect(() => {
    if (activeChallenge?.data?.challenge?._id) {
      setValue('challengeId', activeChallenge.data.challenge._id);
    }
  }, [activeChallenge, setValue]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setValue('file', selectedFile); // Update form value for validation
    setFileError(''); // Clear file error on new selection
  };

  const onSubmit = async (formData) => {
    if (!file) {
      setFileError('Logo is required');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('challengeId', formData.challengeId);
    formDataToSend.append('week', formData.week);
    formDataToSend.append('prizeDetails', formData.prizeDescription);
    formDataToSend.append('brand', formData.brand);
    formDataToSend.append('isActive', true);
    formDataToSend.append('file', file);
    formDataToSend.append('prizeId', selectedId);

    try {
      const res = await editPrizes(formDataToSend).unwrap();
      console.log(res);
      if (res) {
        onClose();
        setShowEditToast(true);
        setTimeout(() => {
          setShowEditToast(false);
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
          <h5 className="text-[24px] font-semibold">Edit Prize</h5>
          <button onClick={onClose} className="cursor-pointer">
            <img src={Cross} alt="Close" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[14px] max-sm:gap-[10px]">
          <label className="flex flex-col text-[16px] font-semibold gap-[9px]">
            Logo
            {file ? (
              <div className="relative w-full border border-dashed border-[#9F9D9E] rounded-[6px] p-[12px]">
                <img
                  src={typeof file === 'string' && file.startsWith('https') ? file : URL.createObjectURL(file)}
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
                <img src={Upload} alt="Upload" />
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
            {loading ? 'Updating...' : 'Update'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPrizePopup;