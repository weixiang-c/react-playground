import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";

//import NaviBar from "./components/navbar";

//Custom modules
import modules from "./modules";
import NaviBar from "./components/navbar";

const ModuleBody = styled.div`
  height: 100%;
  margin: 0px;
  padding: 0px;
`;

function App() {
  //Recursively maps every modules' content based on current route
  const iterations = modules.map((module) => (
    <Route {...module.routeProps} key={module.name} />
  ));

  return (
    <Router>
      <div className="App">
        <header>
          <NaviBar />
        </header>
        <ModuleBody className="App-content">{iterations}</ModuleBody>
      </div>
    </Router>
  );
}

export default App;
