import React from 'react'
import NavBar from "../ui/NavBar"
import Footer from "../ui/Footer"
import {Outlet} from "react-router-dom"


const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout