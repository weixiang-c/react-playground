import React, { Component } from "react";
import logo from "../logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useSpring, animated } from "react-spring";

//Custom modules
import modules from "../modules";

// return (
//   <animated.div
//     style={{
//       transform: rotateZ.interpolate((z) => `rotateZ(${z}deg)`),
//     }}
//   />
// )

const NaviBar = ({}) => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  // //   const { rotateZ } = useSpring({
  // //     from: {
  // //       rotateZ: 0,
  // //     },
  // //     to: {
  // //       rotateZ: 360,
  // //     },
  //   });
  return (
    <Navbar className="bg-dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <animated.span>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React logo"
          />
        </animated.span>
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
