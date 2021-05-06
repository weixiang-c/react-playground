import React from "react";

import styled from "styled-components";

const ToDoDiv = styled.div`
  text-align: left;
  margin-top: 8px;
  background-color: transparent;
  border: 2px solid #103b4f;
  color: #103b4f;
  padding: 10px;
  border-radius: 6px;
  font-size: 22px;
  font-family: inherit;
`;

const ToDoDelete = styled.span`
  float: right;
  padding: 0px 4px;
  cursor: pointer;

  &:hover {
    background-color: #103b4f1c;
    border-radius: 6px;
  }
`;

const ToDo = ({ todo, index, handleDeleteTodo }) => {
  return (
    <ToDoDiv className="todo">
      <span className="todo-text">
        {index + 1}. {todo.text}
      </span>
      <ToDoDelete onClick={() => handleDeleteTodo(todo._id)}>x</ToDoDelete>
    </ToDoDiv>
  );
};

export default ToDo;
