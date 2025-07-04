import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ham_icon from "../../../../assets/hamburger-icon.png";
import { useAdminDetailsQuery } from "../../../../api";

const SideBar = ({ collapsed, setCollapsed, handleSingout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const token = localStorage.getItem("access_token");
  const toggleSidebar = () => setCollapsed(!collapsed);
  const getLinkClass = (path) =>
    `sidebar-link ${currentPath === path ? 'active' : ''}`;

  const {
    data: adminData,
    error: adminError,
    isLoading
  } = useAdminDetailsQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (
      adminError ||
      (adminError?.status === 400 &&
        adminError?.data?.message === "Invalid or malformed token") ||
      (adminError?.status === 401 &&
        adminError?.data?.message === "Authorization header must be in 'Bearer <token>' format")
    ) {
      localStorage.removeItem("access_token");
      navigate("/login", { replace: true });
    }
  }, [adminError]);
  return (
    <div className="h-[100vh]">
      <div
        className={`flex flex-col fixed left-0 top-0 bg-white z-[999] py-[20px] h-full transition-all duration-300 ${collapsed ? "w-[80px] min-w-[80px] max-w-[80px] max-lg:w-[70px] max-lg:min-w-[70px]" : "w-[254px] min-w-[254px] max-w-[254px] max-lg:w-[200px] max-lg:min-w-[200px]"
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
            <span className="flex items-center justify-center w-[48px] h-[48px] text-[24px] font-semibold rounded-full bg-[#FFF6E0] text-[#AD7D00] overflow-hidden">
              {adminData?.admin?.profileImage ? (
                <img
                  src={adminData.admin.profileImage}
                  alt="Profile"
                  className="w-[24px] h-[24px] object-cover rounded-full "
                />
              ) : (
                adminData?.admin?.displayName?.[0]?.toUpperCase() || "A"
              )}
            </span>
            {!collapsed && (
              <div>
                <h5 className="text-[18px] font-semibold text-[#2A2A2A] max-lg:text-[16px] max-lg:font-medium">
                  {adminData?.admin?.displayName || "Admin"}
                </h5>
                <p className="text-[18px] font-semibold text-[#818181] max-lg:text-[16px] max-lg:font-medium">
                  Administrator
                </p>
              </div>
            )}
          </div>

          <div onClick={handleSingout} className="sidebar-link text-[#7C7C7C] cursor-pointer">
            <img src="src/assets/logout-icon.png" alt="" />
            {!collapsed && "Sign out"}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
