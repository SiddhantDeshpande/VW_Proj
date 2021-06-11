
import './App.css';
import Navbar from './components/common_components/Navbar/Navbar';
import React, { useState } from "react";
import Footer from "./components/common_components/Footer/Footer";
import { Context } from "./components/Context";
import AlphaPage from './components/Pages/AlphaPage';
import MainPage from './components/Pages/MainPage';

function App() {

  const [context, setContext] = useState("");
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
   <Navbar/>
   <AlphaPage/>
   {/* <MainPage/> */}
   <Footer/>
   </Context.Provider>
    </div>
  );
}

export default App;
