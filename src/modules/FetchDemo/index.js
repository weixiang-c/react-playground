import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitUserInformation from "./components/GitUserInformation";
import List from "./components/List";
import ListLoader from "./components/ListLoader";

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

const FetchDemo = () => {
  //The fetch demo uses react hook to invoke the components

  //Importing and using react hook
  const ListLoading = ListLoader(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  //Utilizing higher order component
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/weixiang-c/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <React.Fragment>
      <div>Fetch Demo Module</div>
      <div>
        <mark>This is a demo to fetch data coming from github api call.</mark>
      </div>
      <GrandParentContainer>
        <ParentContainer>
          <FormBody>
            <MyTitle>My Repository</MyTitle>
            <ContentContainer className="repo-container text-left">
              <ListLoading
                isLoading={appState.loading}
                repos={appState.repos}
              />
            </ContentContainer>
          </FormBody>
        </ParentContainer>
      </GrandParentContainer>
    </React.Fragment>
  );
};

export default {
  name: "FetchDemo", // The name of the module
  routeProps: {
    // This gets passed straight to react-router
    path: "/fetch-demo", // Where the module lives in the nav hierarchy
    component: FetchDemo, // The actual component itself
  },
};
