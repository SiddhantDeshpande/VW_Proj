import React from "react";
import { Aboutint, points } from "../../Data/Data";
import "./About.css";

export const About = ({ number }) => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src={Aboutint[number].Aboutimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>{Aboutint[number].AboutTitle}</h3>
              <p className="fst-italic">{Aboutint[number].AboutVw}</p>
              <h3>{Aboutint[number].Aboutsubtitle}</h3>

              {points.map((items, i) => (
                <ul key={i}>
                  <li key={i}>{points[i].pointval}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
