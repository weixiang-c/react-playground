import React, { useState, useEffect } from "react";
import api from "../../components/api";
import JBForm from "./components/JBForm";
import ToDo from "./components/Todo";

import styled from "styled-components";

const GrandParentContainer = styled.div`
  background-color: #495a5e;
  display: table;
  height: 100%;
  margin: 0 auto;
`;

const ParentContainer = styled.div`
  background-color: #495a5e;
  display: table-cell;
  vertical-align: middle;
`;

const TodoForm = styled.div`
  width: 24em;
  background-color: #51b0db;
`;

const Description = styled.div`
  margin-bottom: 1em;
`;

const StyledApp = styled.div``;

const JsonBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const fetchTodos = async () => {
    const { status, data } = await api.todos.getAll();
    console.log("status");
    console.log(status);
    console.log("fetch");
    console.log(data);

    if (status === 200) {
      setTodos(data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (inputValue === "") return;
    const newTodo = { text: inputValue };
    const { status, data } = await api.todos.create(newTodo);
    if (status === 200) {
      fetchTodos();
      setInputValue("");
    }
  };

  const handleDeleteTodo = async (id) => {
    const { status, data } = await api.todos.destroy(id);
    if (status === 200) {
      fetchTodos();
    }
  };

  return (
    <StyledApp className="App">
      <h2>JsonBox Module</h2>
      <Description>
        Test for online Jsonbox integration with Axios for REST API call
      </Description>
      <GrandParentContainer>
        <ParentContainer>
          <div className="card">
            <TodoForm className="todolist card-body">
              {/* <Title myName="Nico" /> */}
              <JBForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
              />
              {todos.map((todo, index) => (
                <ToDo
                  todo={todo}
                  index={index}
                  handleDeleteTodo={handleDeleteTodo}
                  key={todo._id}
                />
              ))}
            </TodoForm>
          </div>
        </ParentContainer>
      </GrandParentContainer>
    </StyledApp>
  );
};

export default {
  name: "JsonBox",
  routeProps: {
    path: "/jsonbox",
    component: JsonBox,
  },
};
