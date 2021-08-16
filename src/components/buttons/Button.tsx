import React from "react";
import styled from "styled-components";
import { ButtonType, StyledButtonType } from "./types/ButtonType";

const StyledButton = styled.button<StyledButtonType>`
  &:hover {
    cursor: pointer;
  }
`;

const Button: React.FunctionComponent<ButtonType> = ({
  children,
  onClick,
  active,
  textColor,
  padding,
  border,
  paddingL,
  paddingR,
}) => {
  return (
    <>
      <StyledButton
        style={{
          background: active,
          color: textColor,
          padding: padding,
          border: border,
          paddingLeft: paddingL,
          paddingRight: paddingR,
        }}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
