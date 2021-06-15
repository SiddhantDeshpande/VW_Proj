import React from 'react'
import { Link } from 'react-router-dom';
import { allSkills } from '../../Data/Data';
import "./Skills.css";

export const Skills = ({
    Skillone,
    Skillimg,
    Skilloneitalics,
    Skillonedata,
    Skilltwo,
    Skilltwoimg,
    Skilltwoitalics,
    Skilltwodata,
    Skillthree,
    Skillthreeimg,
    Skillthreeitalics,
    Skillthreedata,
    Skillfour,
    Skillfourimg,
    Skillfouritalics,
    Skillfourdata,
    Skillfive,
    Skillfiveimg,
    Skillfiveitalics,
    Skillfivedata,
  }) => {

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
              <li class="nav-item">
                <Link to="#tab-1" class="nav-link active show" data-bs-toggle="tab" >{Skillone}</Link>
              </li>
              <li class="nav-item">
                <Link to="#tab-2" class="nav-link" data-bs-toggle="tab">{Skilltwo}</Link>
              </li>
              <li class="nav-item">
                <Link to="#tab-3" class="nav-link" data-bs-toggle="tab">{Skillthree}</Link>
              </li>
              <li class="nav-item">
                <Link to="#tab-4" class="nav-link" data-bs-toggle="tab">{Skillfour}</Link>
              </li>
              <li class="nav-item">
                <Link to="#tab-5" class="nav-link" data-bs-toggle="tab">{Skillfive}</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">

{/* 
            {
            allSkills.map((item,i)=>
            <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{item.Skillname}</h3>
                    <p class="fst-italic">{item.Skillitalics}</p>
                    <p>{item.Skilldata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={item.Skillimg} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
            )
          } */}
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{allSkills[0].Skillname}</h3>
                    <p class="fst-italic">{allSkills[0].Skillitalics}</p>
                    <p>{allSkills[0].Skilldata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={allSkills[0].Skillimg} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>

              {/* {
                allSkills.map((items,i)=>(
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{allSkills[i].Skillname}</h3>
                    <p class="fst-italic">{allSkills[i].Skillitalics}</p>
                    <p>{allSkills[i].Skilldata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={allSkills[i].Skillimg} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
    ))
  } */}
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{Skillthree}</h3>
                    <p class="fst-italic">{Skillthreeitalics}</p>
                    <p>{Skillthreedata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={Skillthreeimg} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{Skillfour}</h3>
                    <p class="fst-italic">{Skillfouritalics}</p>
                    <p>{Skillfourdata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={Skillfourimg} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{Skillfive}</h3>
                    <p class="fst-italic">{Skillfiveitalics}</p>
                    <p>{Skillfivedata}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={Skillfiveimg} alt="" class="img-fluid"/>
                  </div>
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

export default Skills
