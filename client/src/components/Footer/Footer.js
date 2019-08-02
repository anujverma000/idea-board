import React from "react";
import styled from "styled-components";

const Footer = () => {
  return(
    <Wrapper>
      build with &hearts;
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.footer`
  z-index: 2;
  padding: 48px;
  margin-top: 100px;
  box-sizing: border-box;
  color: ${props => props.theme.textColorLight};
  font-size: 12px;
  justify-content: center;
  display: flex;
`;

export default Footer;