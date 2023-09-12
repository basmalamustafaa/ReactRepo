import React from 'react'

import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark py-4 px-4  fixed-top  " style={{backgroundColor:'#2c3e50'}}>
            <Link to='/' className="navbar-brand text-white text-uppercase fw-bolder fs-2 mx-5" >START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
         <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav  ms-lg-auto text-white text-uppercase fw-bolder fs-6 mx-lg-5">
                    <li className="nav-item me-auto ">
                        <NavLink to='about' className="nav-link text-white me-2">About </NavLink>
                    </li>
                    <li className="nav-item me-auto">
                        <NavLink to='portifolio' className="nav-link text-white me-2" >Portfolio</NavLink>
                    </li>
                    <li className="nav-item me-auto ">
                        <NavLink to='contact' className="nav-link text-white me-2" >Contact</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
  )
}
