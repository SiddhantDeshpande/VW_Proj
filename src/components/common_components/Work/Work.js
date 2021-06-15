import React from "react";
import "./Work.css";
import { alltasks } from "../../Data/Data";

function Work() {
  return (
    <section id="events" class="events">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>My Work</h2>
          <p>A short overview of tasks performed by me !</p>
        </div>

        <div
          class="events-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="swiper-wrapper">
            {alltasks.map((item, i) => (
              <div class="swiper-slide">
                <div class="row event-item">
                  <div class="col-lg-6">
                    <img src={alltasks[i].Taskimg} class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{alltasks[i].Taskname}</h3>
                    <div class="price">
                      <p>
                        <span>{alltasks[i].Tasktech}</span>
                      </p>
                    </div>
                    <p class="fst-italic">{alltasks[i].Taskproject}</p>
                    <p>{alltasks[i].Taskdesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Work;
