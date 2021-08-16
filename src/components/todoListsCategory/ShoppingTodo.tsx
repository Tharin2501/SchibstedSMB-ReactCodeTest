import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import Checkbox from "../buttons/Checkbox";
import { todoType } from "../todoList/types/TodoListType";

import { TodoListItem } from "../todoListItem/TodoListItem";

type ShoppingTodoType = {
  shoppingTodos: todoType[];
  setShoppingTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
  check: () => void;
};

const ShoppingTodo: React.FC<ShoppingTodoType> = ({
  shoppingTodos,
  setShoppingTodos,
}) => {
  const checkShoppingTodo = (selectedTodo: todoType) => {
    const todo = shoppingTodos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setShoppingTodos(todo);
  };

  const handleDeleteClick = (text: string) => {
    const remove = shoppingTodos.filter((todo) => {
      return todo.text !== text;
    });
    setShoppingTodos(remove);
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {shoppingTodos.map((todo) => (
        <div style={{ display: "flex", padding: "3px" }} key={todo.text}>
          <Button
            paddingL="6px"
            paddingR="6px"
            onClick={() => handleDeleteClick(todo.text)}
            textColor="salmon"
            border="none"
          >
            x
          </Button>
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={checkShoppingTodo}
          />
        </div>
      ))}
    </ul>
  );
};

export default ShoppingTodo;
