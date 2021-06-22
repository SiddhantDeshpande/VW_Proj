import React from "react";
import { Link } from "react-router-dom";
import { allSkills } from "../../Data/Data";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <section id="specials" className="specials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Skills used for development</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                {allSkills.map((items, i) => (
                  <li key={i} className="nav-item">
                    <Link
                      to={allSkills[i].navtabs}
                      className={"nav-link " + (i === 0 ? "active" : "")}
                      data-bs-toggle="tab"
                    >
                      {allSkills[i].Skillname}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                {allSkills.map((item, i) => (
                  <div key={i}
                    className={"tab-pane " + (i === 0 ? "active" : "")}
                    id={allSkills[i].tabid}
                  >
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>{allSkills[i].Skillname}</h3>
                        <p className="fst-italic">{item.Skillitalics}</p>
                        <p>{item.Skilldata}</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src={item.Skillimg} alt="" className="img-fluid" />
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
}

export default Skills;
