import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: slateblue;
`;

const StyledTitle = styled.span`
  color: aliceblue;
  font-size: 30px;
`;

const Header: React.FunctionComponent<HeaderType> = ({ title }) => {
  return (
    <HeaderWrapper>
      <StyledTitle>{title}</StyledTitle>
    </HeaderWrapper>
  );
};

export default Header;
