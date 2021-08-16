import React, { useState } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";

const TodoInputWrapper = styled.div`
  padding: 21px;
`;

const StyledInput = styled.input`
  margin-right: 9px;
  width: 300px;
  height: 30px;
  outline: none;
`;

const ErrorContainer = styled.span`
  display: flex;
  justify-content: center;
  color: white;
`;

const TodoInput: React.FunctionComponent<TodoInputType> = ({
  placeholder,
  addTodos,
}) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleOnClick = () => {
    if (!text) {
      setError("Please type in the inputfield");
      return null;
    }
    addTodos(text);
    setText("");
  };

  return (
    <>
      {error ? <ErrorContainer>{error}</ErrorContainer> : null}
      <TodoInputWrapper>
        <StyledInput
          type="text"
          value={text}
          id="todoInput"
          placeholder={placeholder}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label htmlFor="todoInput">
          <Button padding="9px" onClick={handleOnClick}>
            Add +
          </Button>
        </label>
      </TodoInputWrapper>
    </>
  );
};

export default TodoInput;
