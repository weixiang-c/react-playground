import React from "react";
import styled from "styled-components";

const ModuleGrandParentContainer = styled.div``;

const ModuleParentContainer = styled.div``;

const ModuleWrapper = () => {
  return (
    <ModuleGrandParentContainer>
      <ModuleParentContainer />
    </ModuleGrandParentContainer>
  );
};

export default ModuleWrapper;
