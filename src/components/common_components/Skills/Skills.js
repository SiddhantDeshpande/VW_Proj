import React from "react";
import { Link } from "react-router-dom";
import { allSkills } from "../../Data/Data";
import "./Skills.css";

function Skills()
 {
  return (
    <div>
      <section id="specials" className="specials">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Skills</h2>
            <p>Skills used for development</p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                {
                  allSkills.map((items,i)=>
                  <li class="nav-item">
                  <Link to={allSkills[i].navtabs} class="nav-link" data-bs-toggle="tab">
                    {allSkills[i].Skillname}
                  </Link>
                </li>
                  )
                }
                {/* <li class="nav-item">
                  <Link to="#tab-1" class="nav-link " data-bs-toggle="tab">
                    {Skillone}
                  </Link>
                  //removed active show here 
                </li>
                <li class="nav-item">
                  <Link to="#tab-2" class="nav-link" data-bs-toggle="tab">
                    {Skilltwo}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#tab-3" class="nav-link" data-bs-toggle="tab">
                    {Skillthree}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#tab-4" class="nav-link" data-bs-toggle="tab">
                    {Skillfour}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#tab-5" class="nav-link" data-bs-toggle="tab">
                    {Skillfive}
                  </Link>
                </li> */}
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                {allSkills.map((item, i) => (
                  <div class="tab-pane" id={allSkills[i].tabid}>
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>{allSkills[i].Skillname}</h3>
                        <p class="fst-italic">{item.Skillitalics}</p>
                        <p>{item.Skilldata}</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={item.Skillimg} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
