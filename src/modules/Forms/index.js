import React from "react";
import LoginBox from "./components/LoginBox";

import styled from "styled-components";

const GrandParentContainer = styled.div`
  display: table;
  height: 100%;
  margin: 0 auto;
`;

const ParentContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const FormBody = styled.div`
  height: 100%;
  margin: 0px;
  padding: 0px;

  margin-top: 5em;
  margin-bottom: 5em;
`;

const Forms = () => {
  return (
    <React.Fragment>
      <div>Form Module</div>
      <FormBody>
        <GrandParentContainer>
          <ParentContainer>
            <LoginBox />
          </ParentContainer>
        </GrandParentContainer>
      </FormBody>
    </React.Fragment>
  );
};

export default {
  name: "Forms", // The name of the module
  routeProps: {
    // This gets passed straight to react-router
    path: "/forms", // Where the module lives in the nav hierarchy
    component: Forms, // The actual component itself
  },
};
