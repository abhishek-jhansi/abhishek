import React from 'react'
import './about.css'
import { SlCalender } from "react-icons/sl";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className='section-title'> Abhishek Dangi</h2>
          </div>

          <div className="col-12">
            <div className="about-me">
              <h3 className='about-title'>I am a Web Designer and <span>Developer</span> </h3>
              <p className="bio text-justify">
                Abhishek Dangi is a dedicated front-end developer with one year of hands-on experience in building and optimizing web interfaces for a variety of clients and projects.
                With a keen eye for detail and a passion for creating intuitive user experiences, Sarah excels at translating design concepts into responsive,
                accessible, and visually appealing websites. Her proficiency in modern front-end technologies and frameworks, combined with a commitment to continuous learning,
                positions her as a promising talent in the web development field.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-6">
            <h3 className='detail-title'>Education</h3>
            <div className="details">
                  
            </div>
          </div>
          <div className="col-6"> </div> */}
          <div class="education padd-15">
            <h3 class="title"> Education</h3>
            <div class="row">
              <div class="timeline-box padd-15">
                <div class="timeline dark-shadow">
                <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender/> &nbsp; 2022-2023
                    </h3>
                    <h4 class="timeline-title"> Codding Journey</h4>
                    <p class="timeline-text">
                      Tech altum & ducate (Noida)
                    </p>
                    <p class="timeline-text">
                       I learned front-end development from the well-known institute Tech Altum in Noida, where I acquired skills in HTML, CSS, and JavaScript. Additionally, I completed a MERN stack course (MongoDB, Express.js, React.js, Node.js) from Ducate IT School.
                    </p>

                  </div>
                  <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender /> &nbsp; 2017-2020
                    </h3>
                    <h4 class="timeline-title"> Graduate</h4>
                    <p class="timeline-text">
                      Bundelkhand University (Jhansi , Up)
                    </p>
                    <p class="timeline-text">
                      I hold a Bachelor of Science degree in Physics, Chemistry, and Mathematics (PCM) from Bundelkhand University, Jhansi. My academic background has provided me with a strong foundation in the fundamental principles of the physical sciences and mathematics.
                    </p>
                  </div>
                  <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender/> &nbsp; 2015
                    </h3>
                    <h4 class="timeline-title"> Intermediate</h4>
                    <p class="timeline-text">
                      CLS Inter College Chirgaon (Jhansi , Up)
                    </p>
                    <p class="timeline-text">
                      I completed my intermediate education with a focus on science at CLS Inter College. This program strengthened my knowledge in key scientific disciplines, preparing me for further studies in the field.
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="education padd-15">
            <h3 class="title"> Experience</h3>
            <div class="row">
              <div class="timeline-box padd-15">
                <div class="timeline dark-shadow">
                <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender/> &nbsp; Feb, 2023 - April, 2023
                    </h3>
                    <h4 class="timeline-title"> Internship</h4>
                    <p class="timeline-text">
                      ProInovative Software 
                      <br />
                      Sector-6, Noida
                    </p>

                  </div>
                  <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender /> &nbsp; May 2023 - April 2024
                    </h3>
                    <h4 class="timeline-title"> Front- end Developer</h4>
                    <p class="timeline-text">
                      Alt-m Digital Pvt Ltd 
                      <br />
                      sec-2, Noida
                    </p>
                   
                  </div>
                  <div class="timeline-item">
                    <div class="circle-dot"></div>
                    <h3 class="timeline-date">
                    <SlCalender/> &nbsp; May 2024 
                    </h3>
                    <h4 class="timeline-title"> Front- end Development</h4>
                    <p class="timeline-text">
                       Canviz Technology Pvt Ltd
                    </p>
                    <p class="timeline-text">
                        Sec-62, Noida
                    </p>
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

export default About