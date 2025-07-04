import CurrentPrizeIcon from "../../../../../assets/current-prize.png";
import PendingRequest from "../../../../../assets/pending-requests.png";
import ReportedAccountIcon from "../../../../../assets/reported-accounts.png";



const InfoBox = ({ dashboardData }) => {
  return (
    <div className="flex gap-[24px] flex-wrap max-lg:gap-[16px]">
      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px] max-md:p-[14px]">
        <div className="text-center">
          <h6 className="text-[#6A6A6A] text-[15px] font-extrabold">Current Prizes</h6>
          <h5 className="text-[28px] font-extrabold">{dashboardData?.totalPrizes}</h5>
        </div>
        <img src={CurrentPrizeIcon} alt="" />
      </div>

      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px] max-md:p-[14px]">
        <div className="text-center">
          <h6 className="text-[#6A6A6A] text-[15px] font-extrabold">Pending Requests</h6>
          <h5 className="text-[28px] font-extrabold">{dashboardData?.totalPending
          }</h5>
        </div>
        <img src={PendingRequest} alt="" />
      </div>

      <div className="flex bg-white justify-between items-center px-[24px] py-[14px] border border-[#C3C3C3] rounded-[10px] w-full max-w-[330px] max-md:p-[14px]">
        <div className="text-center">
          <h6 className="text-[#6A6A6A] text-[15px] font-extrabold">Reported Accounts</h6>
          <h5 className="text-[28px] font-extrabold">{dashboardData?.totalPrizes
          }</h5>
        </div>
        <img src={ReportedAccountIcon} alt="" />
      </div>
    </div>
  )
}

export default InfoBox
