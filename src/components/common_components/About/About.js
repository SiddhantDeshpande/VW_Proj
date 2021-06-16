import React from "react";
import { Aboutint, points } from "../../Data/Data";
import "./About.css";

export const About = ({
  AboutTitle,
  AboutTitle2,
  AboutVw,
  Aboutimg,
  pointone,
  pointtwo,
  pointthree,
  pointfour,
  pointfive,
  number,
}) => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="about-img">
                <img src={Aboutint[number].Aboutimg} alt="" />
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>{Aboutint[number].AboutTitle}</h3>
              <p class="fst-italic">{Aboutint[number].AboutVw}</p>
              <h3>{Aboutint[number].Aboutsubtitle}</h3>

              {points.map((items, i) => (
                <ul>
                  <li>{points[i].pointval}</li>
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
