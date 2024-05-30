import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer1() {
    return (
        <>
            <footer className='bg-danger text-white pt-3 pb-3'>
                <div className="first-f">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-content">
                                    <img src="https://logos.textgiraffe.com/logos/logo-name/Abhishek-designstyle-candy-m.png" alt="logo" className='img-fluid' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-content">
                                    <div className="row">
                                        <div className="col-6">
                                            <ul>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul>

                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-content">
                                    <h4>Follow me:</h4>
                                    <h2>
                                        <span className='me-3'><NavLink to="" className="text-white"> <FaXTwitter /> </NavLink>  </span>
                                        <span><NavLink to="" className="text-white"> <FaInstagram /> </NavLink>  </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-f  text-center">
                   <div className="container shadow p-2 d-flex align-item-center justify-content-center">
                   <p> <FaRegCopyright /> Abhishek Dangi || All right reserved</p>
                   </div>
                </div>
            </footer>
        </>
    )
}

export default Footer1