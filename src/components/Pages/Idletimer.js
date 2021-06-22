import React, { useState, useRef, useContext } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { Context } from "../Context";
import MainPage from "./MainPage";
import AlphaPage from "./AlphaPage";

Modal.setAppElement("#root");

function Idletimer() {
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
        <MainPage></MainPage>

        <Modal isOpen={modalisopen}>
          <h2>You have been idle</h2>
          <p>you will be logged out</p>
          <div>
            <button onClick={Logout}>logout</button>

            <button onClick={active}>stay logged in</button>
          </div>
        </Modal>
        <IdleTimer ref={idleref} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
        {/* 3mins */}
      </>
    );
  }
  return <AlphaPage />;
}

export default Idletimer;
