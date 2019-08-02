import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { ReactComponent as TrashIcon } from './trash.svg';
import { deleteIdea } from '../../actions/ideaActions';

const DeleteIdea = ({ idea, trashIdea }) => {

  const handleDelete = e => trashIdea(idea.id);
  
  return(
    <Wrapper onClick={handleDelete}>
      <TrashIcon/>
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const mapDispatchToProps = dispatch => ({
  trashIdea: id =>  dispatch(deleteIdea(id))
});


export default connect(null, mapDispatchToProps)(DeleteIdea);