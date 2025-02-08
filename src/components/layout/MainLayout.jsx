import React from 'react'
import NavBar from "../ui/NavBar"
import Footer from "../ui/Footer"
import {Outlet} from "react-router-dom"


const MainLayout = ({numCartItems}) => {
  return (
    <>
    <NavBar numCartItems = {numCartItems}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout