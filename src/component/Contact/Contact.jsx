import React from 'react'
import './contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import ExtendedForm from './Form';


function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className='section-title'>Contact Me</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className='text-danger'>Have you any question ?</h3>
            <h4>I'M AT YOUR SERVICES</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="contact-details">
              <h4><FaPhoneAlt /></h4>
              <h5>Call Me</h5>
              <h5><Link to="tel:+91887593960">+91887593960</Link></h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact-details">
              <h4><CgMail /></h4>
              <h5>Email Me</h5>
              <h5><Link to="mailto:dangigabhishek@gmail.com">dangigabhishek@gmail.com</Link></h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact-details">
              <h4><FaWhatsapp /></h4>

              <h5>
                <Link target="_blank" to="https://api.whatsapp.com/send?phone=8887593960&amp;text=Hello, Looking for Web Developer. 
                Get in touch with me my name is" >
                  Whatsapp On

                </Link>
              </h5>
              <h5>8887593960</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className='m-2'>Get In Touch</h2>
          </div>
          <div className="col-sm-12">
            <form action="">
              <div className="row">
                <div className="col-sm-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Your Name"
                      name='name' />
                    <label for="floatingInput">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Your Mobile no"
                      name='mobie' />
                    <label for="floatingInput">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Your Email"
                      name='email' />
                    <label for="floatingInput">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Your City"
                      name='city' />
                    <label for="floatingInput">Your City</label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      name='comment'
                    ></textarea>
                    <label for="floatingTextarea2">Comments</label>
                  </div>
                </div>
                <div className="col-sm-12 text-center">
                  <button type="button" class="btn btn-success">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
          {/* <ExtendedForm /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact