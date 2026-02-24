import React from 'react'
import Sidebar from '../components/organisms/Sidebar'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default DashboardLayout