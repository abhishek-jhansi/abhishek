import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container shadow-sm">
        <NavLink className="navbar-brand" to="/">
          <img src="img/logo-new.png" alt="abhishek dangi logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row w-100">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to=""> Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about"> About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service"> Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio"> Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="tel:+918887593960">+918887593960</NavLink>
                </li>

              </ul>
            </div>




          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

