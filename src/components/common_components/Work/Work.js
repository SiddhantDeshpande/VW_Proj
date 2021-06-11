import React from 'react'
import "./Work.css";

export const Work=({
    Taskone,
    Tasktech,
    Taskdesc,
    Taskproject,
    Tasktwo,
    Tasktech2,
    Taskdesc2,
    Taskthree,
    Tasktech3,
    Taskdesc3,
})=>{
    return (
        
            <section id="events" class="events">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>My Work</h2>
          <p>A short overview of tasks performed by me !</p>
        </div>

        <div class="events-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6">
                  <img src="assets/img/sample_design.png" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{Taskone}</h3>
                  <div class="price">
                    <p><span>{Tasktech}</span></p>
                  </div>
                  <p class="fst-italic">
                   {Taskproject}
                  </p>
                  <p>
                    {Taskdesc}
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6">
                  <img src="assets/img/Wireframe.png" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{Tasktwo}</h3>
                  <div class="price">
                    <p><span>{Tasktech2}</span></p>
                  </div>
                  <p class="fst-italic">
                    {Taskproject}
                  </p>
                  <p>
                    {Taskdesc2}
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6">
                  <img src="assets/img/event-custom.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Custom Parties</h3>
                  <div class="price">
                    <p><span>$99</span></p>
                  </div>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
        
    )
}

export default Work
