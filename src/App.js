
import './App.css';
import Navbar from './components/common_components/Navbar/Navbar';
import React, { useState } from "react";
import Footer from "./components/common_components/Footer/Footer";
import { Context } from "./components/Context";
import AlphaPage from './components/Pages/AlphaPage';
import MainPage from './components/Pages/MainPage';
import Cookies from "js-cookie";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import IdleTimer from 'react-idle-timer';
import HomePage from './components/Pages/HomePage';
import AboutUs from './components/Pages/AboutUs';
import Mywork from './components/Pages/Mywork';
import LoginPage from './components/Pages/LoginPage/LoginPage';

function App() {

  const [context, setContext] = useState("");
 

  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
   <Navbar/>
   {/* <Switch> */}
          <Route exact path="/" component={AlphaPage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/About" component={AboutUs}/>
          <Route path="/Mywork" component={Mywork}/>
          
        {/* </Switch> */}
   {/* <AlphaPage/> */}
   {/* <MainPage/> */}
   <Footer/>
   </Context.Provider>
    </div>
  );
}

export default App;
