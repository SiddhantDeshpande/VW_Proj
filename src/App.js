import "./App.css";
import React, { useState } from "react";
import { Context } from "./components/Context";
import AlphaPage from "./components/Pages/AlphaPage";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";

function App() {
  const [context, setContext] = useState("");

  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <Switch>
          <Route exact path="/" component={AlphaPage} /> {/* LOGIN */}
          <Route path="/MainPage" component={MainPage} /> {/* POST - LOGIN */}
        </Switch>
      </Context.Provider>
    </div>
  );
}

export default App;
