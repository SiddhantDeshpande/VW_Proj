import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "../common_components/Navbar/Navbar";
import AboutUs from "./AboutUs";
import Mywork from "./Mywork";


export class MainPage extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/About" component={AboutUs}/>
          <Route path="/Mywork" component={Mywork}/>
        </Switch>
       
        
        
        {/* <Home/> */}
          {/* <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </div> */}

      </>
    );
  }
}

export default MainPage;
