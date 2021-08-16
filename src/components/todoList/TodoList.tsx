import React, { useState } from "react";
import WorkTodo from "../todoListsCategory/WorkTodo";
import TodoInput from "../todoInput/TodoInput";
import ShoppingTodo from "../todoListsCategory/ShoppingTodo";
import StuffTodo from "../todoListsCategory/StuffTodo";
import Button from "../buttons/Button";
import styled from "styled-components";
import Header from "../header/Header";
import { todoCategoryType, TodoListType } from "./types/TodoListType";
import { Link } from "react-router-dom";

export const todoCategory: todoCategoryType[] = [
  { id: 1, name: "work-todo" },
  { id: 2, name: "shopping-todo" },
  { id: 3, name: "stuff-todo" },
];

const Container = styled.div`
  background-color: darkslateblue;
  padding-bottom: 30px;
  min-height: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
`;

const ErrorContainer = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 16px;
`;

const ButtonWrapper = styled.div`
  margin-left: 6px;
  margin-right: 6px;
`;

const TodoList: React.FunctionComponent<TodoListType> = ({
  stuffTodos,
  workTodos,
  shoppingTodos,
}) => {
  const [buttonId, setButtonId] = useState<number | null>(null);

  const [workTodoState, setWorkTodoState] = useState(workTodos);
  const [shoppingTodoState, setShoppingTodoState] = useState(shoppingTodos);
  const [stuffTodoState, setStuffTodoState] = useState(stuffTodos);
  const [errorMessage, setErrorMessage] = useState("");

  const ButtonList = () => {
    const listItems = todoCategory.map((item: todoCategoryType) => (
      <ButtonWrapper key={item.id}>
        <Link to={item.name.toString()}>
          <Button
            padding="9px"
            border="none"
            active={buttonId === item.id ? "slateblue" : "lightGray"}
            textColor={buttonId === item.id ? "white" : "black"}
            onClick={() => setButtonId(item.id)}
          >
            {item.name}
          </Button>
        </Link>
      </ButtonWrapper>
    ));
    return <>{listItems}</>;
  };

  // callback for check prop implented in different todoLists
  const handleCheckCallback = (): void => {};

  const addTodo = (text: string) => {
    const todoObj = { text, complete: false };

    switch (buttonId) {
      case 1:
        setWorkTodoState([...workTodoState].concat(todoObj));
        break;
      case 2:
        setShoppingTodoState([...shoppingTodoState].concat(todoObj));
        break;
      case 3:
        setStuffTodoState([...stuffTodoState.concat(todoObj)]);
        break;
      default:
        setErrorMessage("Please specify a Todo category first!");
    }
  };

  return (
    <Container>
      <Header title="Todo-List" />
      {errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
      <TodoInput placeholder="Create a new todo..." addTodos={addTodo} />
      <ButtonContainer>
        <ButtonList />
      </ButtonContainer>
      {buttonId === 1 ? (
        <WorkTodo
          workTodos={workTodoState}
          setWorkTodos={setWorkTodoState}
          check={() => handleCheckCallback}
        />
      ) : null}
      {buttonId === 2 ? (
        <ShoppingTodo
          shoppingTodos={shoppingTodoState}
          setShoppingTodos={setShoppingTodoState}
          check={() => handleCheckCallback}
        />
      ) : null}
      {buttonId === 3 ? (
        <StuffTodo
          stuffTodos={stuffTodoState}
          setStuffTodos={setStuffTodoState}
          check={() => handleCheckCallback}
        />
      ) : null}
    </Container>
  );
};

export default TodoList;
