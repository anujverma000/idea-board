import React from "react";
import styled from "styled-components";
import SortMenu from "./SortMenu";
import AddIdeaAction from "./AddIdeaAction";

const NavBar = ({sort}) => {
  return(
    <Wrapper>
      <SortMenu sort = {sort}/>
      <AddIdeaAction/>
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.nav`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
`;

export default NavBar;