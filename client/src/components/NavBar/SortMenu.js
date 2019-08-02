import React, { useState, useRef, useEffect } from "react";
import SortOption from './SortOption'
import styled from "styled-components";

const SortMenu = ({ sort }) => {
  const [ displayMenu ,setDisplayMenu ] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  },[])
  
  const handleClickOutside = e => {
    if (node.current && !node.current.contains(e.target)) {
      setDisplayMenu(false)
    }
  }

  return(
    <Wrapper ref={ node } onClick={() => setDisplayMenu(!displayMenu) }>
      <Sort>Sort</Sort>
      { displayMenu &&
        <OptionsMenu>
          <SortOption field='title' sort={sort} label='Title'/>
          <SortOption field='date' sort={sort} label='Date'/>
        </OptionsMenu>
      }
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.div`
  position: relative;
`;
const Sort = styled.div`
  color: ${props => props.theme.textColorPrimary};
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 16px;
  min-width: 150px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid ${props => props.theme.textColorPrimary};
  background-color: ${props => props.theme.backgroundColor};
  &:hover{
      transition: .3s;
      color: ${props => props.theme.textColorInvert};
      background-color: ${props => props.theme.primaryColorLight};
  }
  &:active{
      color: ${props => props.theme.primaryColor};
  }
`;

const OptionsMenu = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  position: absolute;
  top: 60px;
  flex-direction: column;
  min-width: 200px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  z-index: 3;
  box-shadow: 0 0 12px 4px ${props => props.theme.shadowColor};
`;

export default SortMenu;