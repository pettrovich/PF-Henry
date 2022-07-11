import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'
import TopNav from '../topNav/TopNav'

const MainLayout = () => {
  return (
    <>
        <SideBar />
        <div className="main">
            <div className="main__content">
                <TopNav />
                <Outlet />
            </div>
        </div>
    </>
  ) 
}

export default MainLayout