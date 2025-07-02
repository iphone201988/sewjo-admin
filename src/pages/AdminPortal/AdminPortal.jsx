import React, { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const AdminPortal = () => {
  const [collapsed, setCollapsed] = useState(false); // State lifted

  return (
    <div className="flex">
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main
        className={`absolute top-0 min-h-[100vh] transition-all duration-300 bg-[#F9FAFB] px-[40px] py-[48px] max-lg:p-[20px] max-lg:ml-0 max-lg:w-full ${
          collapsed
            ? 'ml-[80px] w-[calc(100%-80px)]'
            : 'ml-[254px] w-[calc(100%-254px)]'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPortal;
