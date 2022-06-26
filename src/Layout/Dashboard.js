import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Sidebar'
import Navbar from '../Component/Navbar'

const Dashboard = ({sidebarOpen,toggleSidebar}) => {
  return (
    <div className="flex justify-between h-screen overflow-y-hidden">
    <div
      className={`${
        sidebarOpen ? "w-52" : "w-0 lg:w-15 "
      } transition-all duration-300 ease-in-out absolute lg:relative left-0 top-0`}
    >
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    </div>
    <div className="flex-1 overflow-auto">
      <Navbar toggleSidebar={toggleSidebar} />
      <Outlet/>
      </div>
    </div>

  )
}

export default Dashboard