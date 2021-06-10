import React from 'react'
import "./Mentor.css";

export const Mentor=({
    Mentorname,
    Mentortwoname,
    Mentorthreename,
    Mentortitle,
    Mentortwotitle,
    Mentorthreetitle,
    Mentortwoimg,
})=>{
    return (
        <div>
            <section id="chefs" class="chefs">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Mentors</h2>
          <p>My Mentors and Seniors</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{Mentorname}</h4>
                  <span>{Mentortitle}</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <img src={Mentortwoimg} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{Mentortwoname}</h4>
                  <span>{Mentortwotitle}</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/chefs/chefs-3.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{Mentorthreename}</h4>
                  <span>{Mentorthreetitle}</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Mentor
