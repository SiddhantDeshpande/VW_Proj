import React from "react";
import "./Work.css";
import { alltasks } from "../../Data/Data";

function Work() {
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>My Work</h2>
          <p>A short overview of tasks performed by me !</p>
        </div>

        <div
          className="events-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            {alltasks.map((item, i) => (
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src={alltasks[i].Taskimg} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{alltasks[i].Taskname}</h3>
                    <div className="price">
                      <p>
                        <span>{alltasks[i].Tasktech}</span>
                      </p>
                    </div>
                    <p className="fst-italic">{alltasks[i].Taskproject}</p>
                    <p>{alltasks[i].Taskdesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Work;
