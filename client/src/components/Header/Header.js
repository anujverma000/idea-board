import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
  return(
    <Wrapper>
      <Logo />
      <AppTitle> BCG Idea Board </AppTitle>
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.header`
  background-color: ${props => props.theme.primaryColorLight};
  box-shadow: 0 0 4px 0 ${props => props.theme.shadowColor};
  z-index: 2;
  height: 62px;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  display: flex;
`;

const AppTitle = styled.div`
  font-size: 28px;
  color: ${props => props.theme.white_1};
  line-height: 42px;
`
export default Header;