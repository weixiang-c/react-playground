import React from "react";

import styled from "styled-components";

import { Form, Button } from "react-bootstrap";

const StyledForm = styled.div`
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: #416678;
  border: 2px solid #103b4f;
  padding: 10px;
  border-radius: 6px;
  color: #103b4f;
  margin-right: 5px;
`;

const JBForm = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <StyledForm>
      <Form>
        <StyledInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder={"Type here..."}
        />
        <Button onClick={handleSubmit} className="submit">
          Submit
        </Button>
      </Form>
    </StyledForm>
  );
};

export default JBForm;
