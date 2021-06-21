import React from 'react'
import AboutUs from './AboutUs'
import HomePage from './HomePage'
import Mywork from './Mywork'
import {Route, Router, Switch  ,withRouter} from "react-router-dom";

function Trialpage() {
    return (
        <div>
          
        <Switch>
        <Route path="/MainPage/About" component={AboutUs}/>
          <Route path="/MainPage/Mywork" component={Mywork}/>
          <Route path="/MainPage/" component={HomePage} />
         
        </Switch>
        
        </div>
    )
}

export default withRouter(Trialpage)
