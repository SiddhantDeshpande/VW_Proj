import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Hero.css";

export const Hero = ({ headline, description, lightText, lightTextDesc }) => {
  const [context, setContext] = useContext(Context);

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-8">
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline},<span>{context}</span>
              </h1>
              <h2
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </h2>

              <div className="btns">
                <Link to="/About" className="animated fadeInUp scrollto">
                  <Button buttonStyle="btn--primary" text="hello"></Button>
                </Link>
                <Link to="/About" className="animated fadeInUp scrollto">
                  <Button buttonStyle="btn--primary" text="sign up"></Button>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
                className="glightbox play-btn"
              ></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
