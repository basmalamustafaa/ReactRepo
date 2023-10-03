import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
    <div>
       <Navbar></Navbar>

        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
