import React from 'react'
import "./Project.css";

export const Project=({
    Project1,
    Project2,
    Project3,
    Pro1desc,
    Pro2desc,
    Pro3desc,
})=>{
    return (
        <div>
            <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Projects</h2>
          <p>Projects I have been involved in !</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" data-aos="zoom-in" data-aos-delay="100">
              <span>01</span>
              <h4>{Project1}</h4>
              <p>{Pro1desc}</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
              <h4>{Project2}</h4>
              <p>{Pro2desc}</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="300">
              <span>03</span>
              <h4>{Project3}</h4>
              <p>{Pro3desc}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Project
