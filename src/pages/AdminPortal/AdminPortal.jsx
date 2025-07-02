import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Challenge from './components/Challenge/Challenge'

const AdminPortal = () => {
  return (
    <div>
      <SideBar/>
   <main className='ml-[254px] absolute w-[calc(100%-254px)] min-h-[100vh] top-[0] px-[40px] py-[48px] bg-[#F9FAFB] max-lg:p-[20px] max-lg:w-full max-lg:ml-0'>
    {/* <Dashboard/> */}
    <Challenge/>

  </main>

    </div>
  )
}

export default AdminPortal
