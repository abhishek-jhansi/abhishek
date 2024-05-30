import React from 'react'
import Navbar from './component/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer1 from './component/footer/Footer1'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer1/>
    </>
  )
}

export default Layout