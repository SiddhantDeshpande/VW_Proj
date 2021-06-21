import React, { useState, useRef, useContext } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";
import Navbar from "../common_components/Navbar/Navbar";
import Trialpage from "./Trialpage";
import Footer from "../common_components/Footer/Footer";
import AboutUs from "./AboutUs";
import Mywork from "./Mywork";
import HomePage from "./HomePage";
import { Switch , Route} from "react-router-dom"

function MainPage() {
  const [context, setContext] = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalisopen, setmodalisopen] = useState(false);
  const idleref = useRef(null);
  const sessionref = useRef(null);
  const onIdle = () => {
    console.log("user is Idle");
    setmodalisopen(true);
    sessionref.current = setTimeout(Logout, 5000); // to log out if the user is isle even after popout
  };
  const active = () => {
    setmodalisopen(false);
    clearTimeout(sessionref.current); //stops timer if user moves
  };
  const Logout = () => {
    setmodalisopen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionref.current);
  };

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Switch>
          {/* <Trialpage/> */}
        <Route path="/MainPage/About" component={AboutUs}/>
          <Route path="/MainPage/Mywork" component={Mywork}/>
          <Route exact path="/MainPage/" component={HomePage} />
         
        </Switch>
        <Footer />
        <Modal isOpen={modalisopen}>
          <h2>You have been idle</h2>
          <p>you will be logged out</p>
          <div>
            <button onClick={Logout}>logout</button>

            <button onClick={active}>stay logged in</button>
          </div>
        </Modal>
        <IdleTimer ref={idleref} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
      </>
    );
  }
  return <Redirect to="/" />;
}

export default MainPage;
