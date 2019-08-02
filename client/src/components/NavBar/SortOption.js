import React, { useState } from "react";
import styled from "styled-components";

const SortOption = ({ field, label, sort }) => {
  const [ sortOrder ,setSortOrder ] = useState('');

  const handleSort = () => {
    let type = sortOrder === 'desc' ? 'asc': 'desc'
    setSortOrder(type);
    sort({field, type})
  }
  return(
    <Option onClick={handleSort}>
      { label } 
      { sortOrder === '' && <DefaultSort/> }
      { sortOrder === 'asc' && <Up/> }
      { sortOrder === 'desc' && <Down/> }
    </Option>
  )
}

const Option = styled.div`
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  padding: 12px;
  &:hover{
    background-color: ${props => props.theme.borderColor};  
  }
  border-bottom: 1px solid ${props => props.theme.borderColor};
  &:last-child{
    border-bottom: none;
  }
`
const DefaultSort = styled.div`
  width: 0;
  height: 0;
  float: right;
  margin: 4px;
  border-style: solid;
  border-width: 0 5px 8.7px 5px;
  border-color: transparent transparent ${props => props.theme.shadowColor} transparent;
`;

const Up = styled(DefaultSort)`
  border-width: 0 5px 8.7px 5px;
  border-color: transparent transparent ${props => props.theme.primaryColor} transparent;
`;

const Down = styled(DefaultSort)`
  border-width: 8.7px 5px 0 5px;
  border-color: ${props => props.theme.primaryColor} transparent transparent transparent;
`;
export default SortOption;