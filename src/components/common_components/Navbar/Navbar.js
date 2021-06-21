import React from "react";
import { BrowserRouter, Link, Route, Switch, NavLink ,useRouteMatch } from "react-router-dom";
import AboutUs from "../../Pages/AboutUs";
import HomePage from "../../Pages/HomePage";
import Mywork from "../../Pages/Mywork";
import Button from "../Button/Button";

function Navbar() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center">
              <span>+91 8605870400</span>
            </i>
            <i class="bi bi-person d-flex align-items-center ms-4">
              <span> Siddhant Deshpande</span>
            </i>
          </div>
        </div>
      </div>

      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <a href="index.html">Volkswagen</a>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/Mainpage/"
                  class="nav-link scrollto"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/MainPage/About"
                  class="nav-link scrollto"
                  href="#about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/MainPage/Mywork"
                  class="nav-link scrollto"
                  href="#events"
                >
                  My Work
                </NavLink>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
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
