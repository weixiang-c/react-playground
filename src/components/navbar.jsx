import React from "react";
import logo from "../logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

import { animated } from "react-spring";

//Custom modules
import modules from "../modules";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const BannerLogo = styled.img`
  width: 40px;
  height: 40px;
  classname: d-inline-block align-top;
  alt: React logo;
  animation: ${rotate} 30s linear infinite;
`;

const NaviBar = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  return (
    <Navbar className="bg-dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <BannerLogo src={logo} />
        React-Playground
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {modules.map((module) => (
            <Nav.Link
              key={module.name}
              href={module.routeProps.path}
              onClick={() => setCurrentTab(module.name)}
              className={currentTab === module.name ? "active" : ""}
            >
              {module.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NaviBar;
