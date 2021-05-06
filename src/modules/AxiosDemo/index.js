import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitUserInformation from "./components/GitUserInformation";

const GrandParentContainer = styled.div`
  display: table;
  height: 100%;
  margin: 0 auto;
  background-color: #fffeef;
`;

const ParentContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  background-color: #e4ecf2;
`;

const FormBody = styled.div`
  height: 100%;
  margin: 0px;
  padding: 0px;

  margin-bottom: 5em;
`;

const ContentContainer = styled.div`
  background-color: #e3e8e5;
  width: 60em;

  height: 700px;
  margin: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: scroll;
`;

const MyTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  color: var(--basic-color);
  margin-top: 1em;
`;

const Description = styled.div`
  margin-bottom: 1em;
`;

const AxiosDemo = () => {
  //Axios Demo uses the classic class component mounting method to render the List

  return (
    <React.Fragment>
      <h2>Axios Demo Module</h2>
      <Description>
        This is a demo to fetch data coming from github api call.
      </Description>
      <GrandParentContainer>
        <ParentContainer>
          <FormBody>
            <MyTitle>My Repository</MyTitle>
            <ContentContainer className="repo-container text-left">
              <GitUserInformation />
            </ContentContainer>
          </FormBody>
        </ParentContainer>
      </GrandParentContainer>
    </React.Fragment>
  );
};

export default {
  name: "AxiosDemo", // The name of the module
  routeProps: {
    // This gets passed straight to react-router
    path: "/axios-demo", // Where the module lives in the nav hierarchy
    component: AxiosDemo, // The actual component itself
  },
};
