import React from 'react'

const About = () => {
    return(
        <div className="about" id="about">
          <div className="section">
              <div className="container">
                  <div className="content-section">
                      <div className="content-title">
                          <h1>
                              ABOUT US
                          </h1>
                      </div>

                      <div className="content">
                          <h3>Know About Us</h3>
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae maxime facilis voluptatum ducimus voluptates sapiente, assumenda earum. Quibusdam numquam optio ratione inventore incidunt accusantium totam aperiam modi, quia molestiae doloremque in impedit, itaque aliquid nostrum, repudiandae natus. Nesciunt, beatae.
                          </p>
                          <div className="button">
                              <a href="/">Read More</a>
                          </div>

                      </div>
                      <div className="social">
                          <a href="/"><i className="fab fa-facebook"></i></a>
                          <a href="/"><i className="fab fa-twitter"></i></a>
                          <a href="/"><i className="fab fa-instagram"></i></a>

                      </div>

                  </div>

                <div className="image-section">
                    <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>

              </div>

          </div>
          <hr></hr>
        </div>
    )
}


export default About;
