import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { useToasts } from "../ToastManager";
import IdeaBody from "./IdeaBody";
import IdeaTitle from './IdeaTitle'
import IdeaDateCreated from "./IdeaDateCreated";
import DeleteIdea from "./DeleteIdea";
import { updateIdea } from '../../actions/ideaActions';

const IdeaCard = ({ idea, updateIdea }) => {

  const [activeFocus, setActiveFocus] = useState(false);
  const [updatedIdea, setUpdatedIdea] = useState(idea);
  const { showToast } = useToasts();
  const saveIdea = ideaInstance => {
    setUpdatedIdea(ideaInstance);
    updateIdea(ideaInstance).then(() => {
      showToast("Saved Successfully.")
    });
  }

  return(
    <Wrapper onMouseEnter={ e => setActiveFocus(true) } onMouseLeave = { e => setActiveFocus(false) }>
      { activeFocus && <DeleteIdea idea={updatedIdea} /> } 
      <IdeaDateCreated date={ updatedIdea.created_date }/>
      <IdeaTitle idea={updatedIdea} saveIdea={saveIdea} />
      <IdeaBody idea={updatedIdea} saveIdea={saveIdea} />
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.div`
  padding: 16px;
  overflow-y: auto;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
  box-sizing: border-box;
  height: 190px;
  overflow: hidden;
  position: relative;
  &:hover{
    box-shadow: 0 0 12px 4px ${props => props.theme.shadowColor};
    transition: .54s;
    transition-delay: .1s;
    cursor: pointer;
  }
`

const mapDispatchToProps = dispatch => ({
  updateIdea: ideaInstance => dispatch(updateIdea(ideaInstance))
});

export default connect(null, mapDispatchToProps)(IdeaCard);