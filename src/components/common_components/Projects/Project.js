import React from "react";
import { Projects } from "../../Data/Data";
import "./Project.css";

function Project() {
  return (
    <div>
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Projects</h2>
            <p>Projects I have been involved in !</p>
          </div>

          <div class="row">
            {Projects.map((items, i) => (
              <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>0{i}</span>
                  <h4>{Projects[i].Projectname}</h4>
                  <p>{Projects[i].Projectdescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
