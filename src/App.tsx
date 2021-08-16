import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./components/todoList/TodoList";
import ShoppingTodo from "./components/todoListsCategory/ShoppingTodo";
import WorkTodo from "./components/todoListsCategory/WorkTodo";
import { initialTodos, shoppingTodoData, stuffTodoData } from "./data/TodoData";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Pass the 3 todolists data to child ButtonGroup
const App: React.FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TodoList
                workTodos={initialTodos}
                stuffTodos={stuffTodoData}
                shoppingTodos={shoppingTodoData}
              />
            )}
          />
          <Route
            exact
            path="/work-todo"
            render={() => (
              <TodoList
                workTodos={initialTodos}
                stuffTodos={stuffTodoData}
                shoppingTodos={shoppingTodoData}
              />
            )}
          />
          <Route
            exact
            path="/shopping-todo"
            render={() => (
              <TodoList
                workTodos={initialTodos}
                stuffTodos={stuffTodoData}
                shoppingTodos={shoppingTodoData}
              />
            )}
          />
          <Route
            exact
            path="/stuff-todo"
            render={() => (
              <TodoList
                workTodos={initialTodos}
                stuffTodos={stuffTodoData}
                shoppingTodos={shoppingTodoData}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
