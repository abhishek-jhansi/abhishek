import React from 'react'
// import Typewriter from './Typewritter'
import { ReactTyped } from "react-typed";
import './home.css'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaGithubSquare } from "react-icons/fa";


function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="img/abhishek.png" alt="abhishek dangi" className='img-fluid' />
          </div>
          <div className="col-lg-6 content-box">
            <div className=' content'>
              {/* <h1 className='poppins-bold title '>Welcome To AD WEB Solution</h1> */}
              <div>
                <h1 className='typewritter'>
                  I'm a{" "}
                  <ReactTyped
                    strings={["Developer", "Thinker", "Designer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="."
                    showCursor={true}
                  />
                </h1>
              </div>
              <div className="description-box">
                <p> Hi! There i'm</p>
                <h2 className='name'><span>Abhishek</span> Dangi</h2>
                <p className='des-content'>
                  A <span>front-end web developer</span> passionate about creating interactive applications and experience on the web.
                </p>
                <div className="social-btn">
                  <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                      <Link href="#"> Download CV</Link>
                    </span>
                  </button>
                  <Link className='media-icon whatsapp' target="_blank" to="https://api.whatsapp.com/send?phone=8887593960&amp;text=Hello, Looking for Web Developer. 
                Get in touch with me my name is" >
                    <FaWhatsappSquare />
                  </Link>
                  <Link className='media-icon'>
                  <FaLinkedin />
                  </Link>

                  <Link className='media-icon'>
                  <FaGithubSquare />
                  </Link>
                </div>
              </div>
            </div>

            {/* <div>
              <h1>
                Welcome to <Typewriter text="My React App" delay={100} infinite />
              </h1>
            </div> */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Home