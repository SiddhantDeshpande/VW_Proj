import React from 'react'
import AboutUs from './AboutUs'
import HomePage from './HomePage'
import Mywork from './Mywork'
import {Route, Switch } from "react-router-dom";

function Trialpage() {
    return (
        <div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/About" component={AboutUs}/>
          <Route path="/Mywork" component={Mywork}/>
        </Switch>
        </div>
    )
}

export default Trialpage
