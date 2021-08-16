import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../buttons/Checkbox";
import { TodoListItemType } from "./types/TodoListItemType";

const StyledLi = styled.li`
  width: 330px;
  margin-left: auto;
`;

export const TodoListItem: React.FC<TodoListItemType> = ({ todo }) => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledLi>
      <label>
        {todo.complete ? (
          <Checkbox
            label={todo.text}
            value={todo.complete ? !checked : !checked}
            onChange={handleOnChange}
          />
        ) : (
          <Checkbox
            label={todo.text}
            value={checked}
            onChange={handleOnChange}
          />
        )}
      </label>
    </StyledLi>
  );
};
