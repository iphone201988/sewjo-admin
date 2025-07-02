import React from "react";
import ham_icon from "../../../../assets/hamburger-icon.png";

const SideBar = () => {
  return (
    <div className=" h-[100vh] max-lg:hidden">
      <div className="flex flex-col shadow-[0_13px_9px_rgba(0,0,0,0.25)] fixed left-0 top-0 bg-white z-[999] py-[20px] h-full w-[254px] min-w-[254px] max-w-[254px]">
        <button className="ml-auto pr-[20px] cursor-pointer">
          <img src={ham_icon} alt="" />
        </button>
        <a
          className="mb-[30px] mt-[10px] text-[18px] text-[#41403F] text-center font-black block "
          href=""
        >
          Admin Portal
        </a>
        <div className="side-bar flex flex-col gap-[40px] w-full px-[7px] max-lg:gap-[16px]">
          <a className="sidebar-link active" href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-1.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-1.png" alt="" />
            Dashboard
          </a>
          <a className="sidebar-link " href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-2.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-2.png" alt="" />
            Challenges
          </a>
          <a className="sidebar-link " href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-3.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-3.png" alt="" />
            Manual Points
          </a>
          <a className="sidebar-link " href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-4.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-4.png" alt="" />
            Pattern Requests
          </a>
          <a className="sidebar-link " href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-5.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-5.png" alt="" />
            Reported Accounts
          </a>
          <a className="sidebar-link " href="">
            <img
              className="active-icon"
              src="src/assets/active-icon-6.png"
              alt=""
            />
            <img className="not-active" src="src/assets/icon-6.png" alt="" />
            Bugs
          </a>
        </div>

        {/* profile pic */}
        <div className="flex flex-col items-start justify-between gap-[26px] mt-auto px-[7px] border-t border-[#BCBCBC] pt-[24px]">
          <div className="flex items-center gap-[10px]">
            <span className="flex items-center justify-center w-[48px] h-[48px] text-[24px] font-semibold rounded-full bg-[#FFF6E0] text-[#AD7D00]">
              I
            </span>
            <div className="">
              <h5 className="text-[18px] font-semibold text-[#2A2A2A] max-lg:text-[16px] max-lg:font-medium">
                Irina
              </h5>
              <p className="text-[18px] font-semibold text-[#818181] max-lg:text-[16px] max-lg:font-medium">
                Administrator{" "}
              </p>
            </div>
          </div>
          <a className="sidebar-link text-[#7C7C7C]" href="">
            <img className="" src="src/assets/logout-icon.png" alt="" />
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
