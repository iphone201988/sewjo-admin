import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/challenges':
        return 'Challenge';
      default:
        return 'Challenge Management';
    }
  };

  const title = getTitle();

  return (
    <div className='pb-[36px] max-lg:pb-[24px]'>
      <h2 className='text-[28px] font-extrabold text-[#32302F] max-md:text-[20px]'>{title} Management</h2>
      <p className='text-[#7A7A7A] font-semibold'>Manage prizes and rewards.</p>
    </div>
  );
};

export default Header;
