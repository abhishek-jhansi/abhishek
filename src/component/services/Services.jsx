import React from 'react'
import './service.css'

function Services() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className='section-title'>Services</h3>
          </div>
          <div className="col-md-12 p-3">
            <div className="curved-box left-curve">
              <div className="row">
                <div className="col-lg-4 text-start text-center-md">
                  <img src="img/web-dev.png" alt="img" className='support-img' />
                </div>
                <div className="col-lg-8">
                  <div className="service-content text-center">
                    <h3 className='service-title'>Web <span>Development</span></h3>
                    <p className='text-justify mt-4'>
                      Web development is a vital and ever-evolving field that combines creativity
                      with technical skills. Whether focusing on the aesthetics and interactivity
                      of the front end, the robust functionality of the back end, or mastering
                      both as a full-stack developer, professionals in this field are essential
                      to creating and maintaining the dynamic web experiences that users
                      expect today.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3">
            <div className="curved-box right-curve">
              <div className="row">

                <div className="col-lg-8">
                  <div className="service-content text-center">
                    <h3 className='service-title'>Web <span>Design</span></h3>
                    <p className='text-justify mt-4'>
                       Web design is an essential component of building a successful online
                       presence. It requires a balance of creativity, technical skills,
                       and user-centered thinking. By focusing on layout, visual design,
                       UX, content, interactivity, technology, and staying updated with 
                       trends, web designers can create websites that are not only visually
                       appealing but also functional and user-friendly.
                    </p>
                  </div>

                </div>
                <div className="col-lg-4 text-end text-center-md">
                  <img src="img/webdesign.png" alt="img" className='support-img' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3">
            <div className="curved-box left-curve">
              <div className="row">
                <div className="col-lg-4 text-start text-center-md">
                  <img src="img/marketing.png" alt="img" className='support-img' />
                </div>
                <div className="col-lg-8">
                  <div className="service-content text-center">
                    <h3 className='service-title'> Digital  <span>Marketing</span></h3>
                    <p className='text-justify mt-4'>
                      Web development is a vital and ever-evolving field that combines creativity
                      with technical skills. Whether focusing on the aesthetics and interactivity
                      of the front end, the robust functionality of the back end, or mastering
                      both as a full-stack developer, professionals in this field are essential
                      to creating and maintaining the dynamic web experiences that users
                      expect today.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3">
            <div className="curved-box right-curve">
              <div className="row">

                <div className="col-lg-8">
                  <div className="service-content text-center">
                    <h3 className='service-title'>On page <span>SEO</span></h3>
                    <p className='text-justify mt-4'>
                    On-page SEO (Search Engine Optimization) refers to the practice of optimizing individual web pages to rank higher and earn more relevant traffic in search engines. It involves both the content of the page and the HTML source code.
                    </p>
                  </div>

                </div>
                <div className="col-lg-4 text-end text-center-md">
                  <img src="img/seo.png" alt="img" className='support-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services