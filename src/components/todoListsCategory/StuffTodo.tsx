import React from "react";
import Button from "../buttons/Button";
import { todoType } from "../todoList/types/TodoListType";

import { TodoListItem } from "../todoListItem/TodoListItem";

type StuffTodoType = {
  stuffTodos: todoType[];
  setStuffTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
  check: () => void;
};

const StuffTodo: React.FC<StuffTodoType> = ({ stuffTodos, setStuffTodos }) => {
  const checkStuffTodo = (selectedTodo: todoType) => {
    const todo = stuffTodos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setStuffTodos(todo);
  };

  const handleDeleteClick = (text: string) => {
    const remove = stuffTodos.filter((todo) => {
      return todo.text !== text;
    });
    setStuffTodos(remove);
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {stuffTodos.map((todo) => (
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
            toggleTodo={checkStuffTodo}
          />
        </div>
      ))}
    </ul>
  );
};

export default StuffTodo;
