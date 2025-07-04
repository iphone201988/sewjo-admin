import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast';
import { useAdminSignoutMutation } from '../../api';

const AdminPortal = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false); // State lifted
  const [showToast, setShowToast] = useState(false); // ✅ toast state
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminSignout] = useAdminSignoutMutation();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSingout = async () => {
    const res = adminSignout().unwrap();
    if (res) {
      localStorage.removeItem("access_token");
      setShowToast(true);
    }
    setTimeout(() => {
      setShowToast(false); // optional auto-dismiss
      navigate("/login");
    }, 2000); // Wait before navigating
  }

  return (
    <div className="flex">
      <SideBar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        handleSingout={handleSingout}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main
        className={`min-h-[100vh] transition-all duration-300 bg-[#F9FAFB] px-[40px] py-[48px] max-lg:p-[20px] ${
          isMobile 
            ? 'w-full' // Full width on mobile
            : collapsed
              ? 'ml-[80px] w-[calc(100%-80px)]' // Collapsed desktop
              : 'ml-[254px] w-[calc(100%-254px)]' // Expanded desktop
        }`}
      >
        <Outlet />

        {showToast && (
          <Toast
            message="Signed Out Successfully"
            subMessage="You have been logged out of your admin account."
            onClose={() => setShowToast(false)}
            position="top-right"
            bgColor="bg-white"
            titleColor="text-black"
            descriptionColor="text-[#5C5C5C]"
          />
        )}
      </main>
    </div>
  );
};

export default AdminPortal;