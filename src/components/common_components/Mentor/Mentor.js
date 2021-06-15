import React from "react";
import { allMentors } from "../../Data/Data";
import "./Mentor.css";

function Mentor() {
  return (
    <div>
      <section id="chefs" class="chefs">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Mentors</h2>
            <p>My Mentors and Seniors</p>
          </div>

          <div class="row">
            {allMentors.map((item, i) => (
              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <img src={allMentors[i].Mentorimg} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>{allMentors[i].Mentorname}</h4>
                      <span>{allMentors[i].Mentortitle}</span>
                    </div>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentor;
