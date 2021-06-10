import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
    return (
        <div>
            <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-center justify-content-md-between">

      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-phone d-flex align-items-center"><span>+91 8605870400</span></i>
        <i class="bi bi-person d-flex align-items-center ms-4"><span> Siddhant Deshpande</span></i>
      </div>

      {/* <div class="languages d-none d-md-flex align-items-center">
        <ul>
          <li>En</li>
          <li><a href="#">De</a></li>
        </ul>
      </div> */}
    </div>
  </div>

  
  <header id="header" class="fixed-top d-flex align-items-cente">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><a href="index.html">Volkswagen</a></h1>
  
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><Link to="/" class="nav-link scrollto active">Home</Link></li>
          <li><Link to="/About" class="nav-link scrollto" href="#about">About</Link></li>
          <li><Link to="/Mywork"class="nav-link scrollto" href="#events">My Work</Link></li>
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <Link to='/About' className='scrollto d-none d-lg-flex'>
                    <Button buttonStyle='btn--outline' text="Contact"></Button>
                  </Link>

    </div>
  </header>
        </div>
    )
}

export default Navbar
