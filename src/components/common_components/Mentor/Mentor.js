import React from "react";
import { allMentors } from "../../Data/Data";
import "./Mentor.css";

function Mentor() {
  return (
    <div>
      <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Mentors</h2>
            <p>My Mentors and Seniors</p>
          </div>

          <div className="row">
            {allMentors.map((item, i) => (
              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay="100">
                  <img src={allMentors[i].Mentorimg} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>{allMentors[i].Mentorname}</h4>
                      <span>{allMentors[i].Mentortitle}</span>
                    </div>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-linkedin"></i>
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
