import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ham_icon from "../../../../assets/hamburger-icon.png";

const SideBar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => setCollapsed(!collapsed);

  const getLinkClass = (path) =>
    `sidebar-link ${currentPath === path ? 'active' : ''}`;

  return (
    <div className="h-[100vh] max-lg:hidden">
      <div
        className={`flex flex-col fixed left-0 top-0 bg-white z-[999] py-[20px] h-full transition-all duration-300 ${collapsed ? "w-[80px] min-w-[80px] max-w-[80px]" : "w-[254px] min-w-[254px] max-w-[254px]"
          } shadow-[0_13px_9px_rgba(0,0,0,0.25)]`}
      >
        {/* Hamburger icon */}
        <button onClick={toggleSidebar} className="ml-auto pr-[20px] cursor-pointer">
          <img src={ham_icon} alt="Toggle" />
        </button>

        {/* Title */}
        <Link
          className={`mb-[30px] mt-[10px] text-[18px] text-[#41403F] text-center font-black block transition-all duration-300 ${collapsed ? "opacity-0 h-0 overflow-hidden" : ""}`}
          to="/"
        >
          Admin Portal
        </Link>

        {/* Sidebar Links */}
        <div className="side-bar flex flex-col gap-[20px] w-full px-[7px] max-lg:gap-[16px]">
          <Link className={getLinkClass("/dashboard")} to="/dashboard">
            <img className="active-icon" src="src/assets/active-icon-1.png" alt="" />
            <img className="not-active" src="src/assets/icon-1.png" alt="" />
            {!collapsed && "Dashboard"}
          </Link>

          <Link className={getLinkClass("/challenges")} to="/challenges">
            <img className="active-icon" src="src/assets/active-icon-2.png" alt="" />
            <img className="not-active" src="src/assets/icon-2.png" alt="" />
            {!collapsed && "Challenges"}
          </Link>

          {/* <Link className={getLinkClass("/manual-points")} to="/manual-points">
            <img className="active-icon" src="src/assets/active-icon-3.png" alt="" />
            <img className="not-active" src="src/assets/icon-3.png" alt="" />
            {!collapsed && "Manual Points"}
          </Link>

          <Link className={getLinkClass("/pattern-requests")} to="/pattern-requests">
            <img className="active-icon" src="src/assets/active-icon-4.png" alt="" />
            <img className="not-active" src="src/assets/icon-4.png" alt="" />
            {!collapsed && "Pattern Requests"}
          </Link>

          <Link className={getLinkClass("/reported-accounts")} to="/reported-accounts">
            <img className="active-icon" src="src/assets/active-icon-5.png" alt="" />
            <img className="not-active" src="src/assets/icon-5.png" alt="" />
            {!collapsed && "Reported Accounts"}
          </Link>

          <Link className={getLinkClass("/bugs")} to="/bugs">
            <img className="active-icon" src="src/assets/active-icon-6.png" alt="" />
            <img className="not-active" src="src/assets/icon-6.png" alt="" />
            {!collapsed && "Bugs"}
          </Link> */}
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-start justify-between gap-[26px] mt-auto px-[7px] border-t border-[#BCBCBC] pt-[24px]">
          <div className="flex items-center gap-[10px]">
            <span className="flex items-center justify-center w-[48px] h-[48px] text-[24px] font-semibold rounded-full bg-[#FFF6E0] text-[#AD7D00]">
              I
            </span>
            {!collapsed && (
              <div>
                <h5 className="text-[18px] font-semibold text-[#2A2A2A] max-lg:text-[16px] max-lg:font-medium">
                  Irina
                </h5>
                <p className="text-[18px] font-semibold text-[#818181] max-lg:text-[16px] max-lg:font-medium">
                  Administrator
                </p>
              </div>
            )}
          </div>

          <Link className="sidebar-link text-[#7C7C7C]" to="/login">
            <img src="src/assets/logout-icon.png" alt="" />
            {!collapsed && "Sign out"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
