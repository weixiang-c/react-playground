//import React from "react";
import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

import logo from "../../../logo.svg";

const LoginForm = styled.div`
  width: 19em;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ImgSize = styled.img`
  width: 10em;
  height: 8em;
  display: block;
  margin: auto;
  animation: ${rotate} 20s linear infinite;
`;

//////////////Using stateless component
// const LoginBox = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("You are logging in.");
//   };
//   return (
//     <div className="card">
//       <ImgSize
//         className="card-img-top"
//         src={logo}
//         alt="Card image cap"
//       ></ImgSize>
//       <LoginForm className="card-body">
//         <Form onSubmit={handleSubmit}>
//           <div className="text-left">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//           </div>
//           <div className="text-right">
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </div>
//         </Form>
//       </LoginForm>
//     </div>
//   );
// };

// export default LoginBox;

class LoginBox extends Component {
  state = {};
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("You are logging in.");
    };
    return (
      <div className="card">
        <ImgSize
          className="card-img-top"
          src={logo}
          alt="Card image cap"
        ></ImgSize>
        <LoginForm className="card-body">
          <Form onSubmit={handleSubmit}>
            <div className="text-left">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </div>
            <div className="text-right">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </LoginForm>
      </div>
    );
  }
}

export default LoginBox;
