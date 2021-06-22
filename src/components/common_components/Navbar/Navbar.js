import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center">
              <span>+91 8605870400</span>
            </i>
            <i className="bi bi-person d-flex align-items-center ms-4">
              <span> Siddhant Deshpande</span>
            </i>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <a href="index.html">Volkswagen</a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/Mainpage/"
                  className="nav-link scrollto"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/MainPage/About"
                  className="nav-link scrollto"
                  href="#about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/MainPage/Mywork"
                  className="nav-link scrollto"
                  href="#events"
                >
                  My Work
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <Link to="/About" className="scrollto d-none d-lg-flex">
            <Button buttonStyle="btn--outline" text="Contact"></Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
