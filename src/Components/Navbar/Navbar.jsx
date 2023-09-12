import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-md navbar-dark py-4 px-4 " style={{backgroundColor:'#2c3e50'}}>
            <Link to='/' className="navbar-brand text-white text-uppercase fw-bolder fs-2 mx-5" >START FRAMEWORK</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 text-white text-uppercase fw-bolder fs-6 mx-5">
                    <li className="nav-item">
                        <Link to='about' className="nav-link text-white "  aria-current="page">About </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='portifolio' className="nav-link text-white" >Portfolio</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to='contact' className="nav-link text-white" >Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
  )
}
