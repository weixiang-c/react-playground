import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import NaviBar from "./components/navbar";

//Custom modules
import modules from "./modules";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NaviBar />
        </header>
        <div className="App-content">
          {modules.map((module) => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
