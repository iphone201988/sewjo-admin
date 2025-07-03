import React, { useState } from 'react'
import Header from '../Header/Header'
import SearchBar from './components/SearchBar'
import Prizes from './components/Prizes'
import AddNewPrizePopup from './components/AddNewPrizePopup'
import { useDeletePrizesMutation, useGetPrizesQuery } from '../../../../api'
import PrizesSkeleton from '../../../../components/Skeleton/Prizeskeleton'
import Toast from '../../../../components/Toast'

const Challenge = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAddToast, setShowAddToast] = useState(false);
  const [showEditToast, setShowEditToast] = useState(false);
  const [deletePrizes] = useDeletePrizesMutation();


  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const { data: prizeData, isLoading } = useGetPrizesQuery();


  const handleDelete = async (id) => {
    const res = await deletePrizes(id).unwrap();
    if (res) {
      setShowToast(true);
      console.log(res);
    }

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  console.log("showAddToast", showAddToast);


  return (
    <div className='w-full'>
      <Header />
      <div className="mb-6">
        <SearchBar handleOpenPopup={handleOpenPopup} />
        <button
          onClick={handleOpenPopup}
          className="mt-4 cursor-pointer text-sm sm:text-base text-white font-semibold bg-[#32302F] rounded-[5px] px-4 py-2 hover:bg-[#474747]"
        >
          Add Prize
        </button>

      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-[20px] gap-y-[20px] sm:gap-x-[50px] sm:gap-y-[30px] w-full">
        {
          prizeData?.prizes?.map((data) => {
            return (
              <Prizes detail={data} handleDelete={handleDelete} setShowEditToast={setShowEditToast} />
            )
          })
        }
        {isLoading &&
          Array.from({ length: 2 }).map((_, index) => (
            <PrizesSkeleton key={index} />
          ))
        }

      </div>
      {showToast && (
        <Toast
          message="Prize Deleted"
          subMessage="The selected prize has been removed successfully."
          onClose={() => setShowToast(false)}
          position="bottom-right"
          bgColor="bg-[#EF4444]"
          titleColor="text-white"
          descriptionColor="text-white"
        />
      )}

      {showAddToast && (
        <Toast
          message="Prize Added"
          subMessage="Success! Your new prize is now live."
          onClose={() => setShowAddToast(false)}
          position="bottom-right"
          bgColor="bg-white"
          titleColor="text-black"
          descriptionColor="text-[#5C5C5C]"
        />
      )}
      {showEditToast && (
        <Toast
          message="Prize Updated!"
          subMessage="Edits have been saved."
          onClose={() => setShowEditToast(false)}
          position="bottom-right"
          bgColor="bg-white"
          titleColor="text-black"
          descriptionColor="text-[#5C5C5C]"
        />
      )}
      {isPopupOpen && <AddNewPrizePopup onClose={handleClosePopup} setShowAddToast={setShowAddToast} />}
    </div>
  )
}

export default Challenge
