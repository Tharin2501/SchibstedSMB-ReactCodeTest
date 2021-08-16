import React from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

const HideNativeCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledLabel = styled.label<StyledCheckboxType>`
  padding-left: 12px;
  color: ${({ checked }) => (checked ? "darkCyan" : "white")};
`;

const Icon = styled(BsCheck)`
  color: Cyan;
`;

const StyledCheckbox = styled.div<StyledCheckboxType>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? "darkSlateBlue" : "white")};
  border-radius: 10px;
  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

const Checkbox: React.FC<CheckboxType> = ({ label, value, onChange }) => {
  return (
    <>
      <HideNativeCheckbox checked={value} onChange={onChange} />
      <StyledCheckbox checked={value}>
        <Icon />
      </StyledCheckbox>
      <StyledLabel checked={value}>{label}</StyledLabel>
    </>
  );
};

export default Checkbox;
