import React from 'react'
import { NavLink } from 'react-router-dom'
import './portfolio.css'

function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <h2 className='section-title'> My Portfolio</h2>
          </div>
          <div className="col-sm-12">
            <h4 className='last-project'>My Last Project:</h4>
          </div>
          <div className="row m-auto">
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/iddon.png" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" />
                <div class="card-body">
                  <h5 class="card-title text-center">IDDO</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html, CSS, Java Script <br />
                    PSD to Html conversion
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://abhi-iddo.netlify.app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/iddon.png" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/sp-planner.png" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                <div class="card-body">
                  <h5 class="card-title text-center">SM Planner</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html, CSS, Java Script <br />
                    PSD to Html conversion
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://abhi-sm-planner.netlify.app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/sp-planner.png" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/avenu-1.jpg" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal2" />
                <div class="card-body">
                  <h5 class="card-title text-center">Avenue Fashion</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html,SASS, Java Script <br />
                    PSD to Html Conversion
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://abhi-ave.netlify.app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/avenu-1.jpg" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/weather-1.jpg" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal3" />
                <div class="card-body">
                  <h5 class="card-title text-center">Weather App</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html, CSS, Java Script <br />
                    API Integration
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://abhi-weather-info.netlify.app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/weather-1.jpg" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/notes-app.jpg" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal4" />
                <div class="card-body">
                  <h5 class="card-title text-center">My Notes App</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html, CSS, Java Script <br />
                    used local storage for data
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://93-abhishek-dangi.github.io/notes-app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/notes-app.jpg" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card rounded-5 rounded-top-0 m-4" >
                <img src="img/payment-1.jpg" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal5" />
                <div class="card-body">
                  <h5 class="card-title text-center">Card Validator</h5>
                  <p class="card-text">
                    <span className='bg-danger text-white ps-2 pe-2'>Skill:</span> &nbsp;
                    Html, CSS, Java Script <br />
                    (use RegEx to validate)
                  </p>
                  <div className='text-center'>
                    <NavLink to="https://card-validater.netlify.app/" className="btn btn1 btn-danger w-full">View</NavLink>
                  </div>
                  <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="img/payment-1.jpg" className='img-fluid' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio