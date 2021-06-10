import React from 'react'
import "./About.css";

export const About=({
    AboutTitle,
    AboutTitle2,
    AboutVw,
    Aboutimg,
    pointone,
    pointtwo,
    pointthree,
    pointfour,
    pointfive,

})=>{
    return (
        <div>
            <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src={Aboutimg} alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>{AboutTitle}</h3>
            <p class="fst-italic">
              {AboutVw}
            </p>
            <h3>{AboutTitle2}</h3>
            <ul>
              <li>{pointone}</li>
              <li>{pointtwo}</li>
              <li>{pointthree}</li>
              <li>{pointfour}</li>
              <li>{pointfive}</li>
            </ul>
            {/* <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p> */}
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default About
