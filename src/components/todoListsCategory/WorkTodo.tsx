import React from "react";
import Button from "../buttons/Button";
import { todoType } from "../todoList/types/TodoListType";
import { TodoListItem } from "../todoListItem/TodoListItem";

type WorkTodoType = {
  workTodos: todoType[];
  setWorkTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
  check: () => void;
};

const WorkTodo: React.FC<WorkTodoType> = ({ workTodos, setWorkTodos }) => {
  const checkWorkTodo = (selectedTodo: todoType) => {
    const todo = workTodos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setWorkTodos(todo);
  };

  const handleDeleteClick = (text: string) => {
    const remove = workTodos.filter((todo) => {
      return todo.text !== text;
    });
    setWorkTodos(remove);
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {workTodos.map((todo) => (
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
          <TodoListItem todo={todo} toggleTodo={checkWorkTodo} />
        </div>
      ))}
    </ul>
  );
};

export default WorkTodo;
