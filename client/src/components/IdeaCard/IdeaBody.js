import React, { useState } from "react";
import styled from "styled-components";

const IdeaBody = ({ idea, saveIdea }) => {

  const maxLength = 140;
  const displayLimit = 15;
  const [ ideaBody, setIdeaBody ] = useState(idea.body);
  const [ isEdited, setIsEdited ] = useState(false);
  const [ displayCharValue, setDisplayCharValue ] = useState(maxLength - idea.body.length);

  const updateIdea = () => {
    if (isEdited) {
      saveIdea(getUpdatedIdea());
      setIsEdited(false);
    }
  }

  const handleChange = e => {
    let value = e.target.value;
    setDisplayCharValue(maxLength - value.length);
    setIdeaBody(value);
    setIsEdited(true);
  }

  const getUpdatedIdea = () => ({...idea, body: ideaBody})

  return <>
          <IdeaBodyEditable
            value={ideaBody} 
            onChange={handleChange} 
            type="text"
            maxLength={maxLength}
            onBlur={updateIdea}
            placeholder="Description..."/>
          { displayCharValue < displayLimit && <CharCounter>{`${displayCharValue}/${maxLength}`}</CharCounter> }
        </>
}

/**
 *  STYLES
 */

const IdeaBodyEditable = styled.textarea`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: normal;
  resize: none;
  width: 95%;
  height: 85px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  &:focus{
    outline: 1px solid ${props => props.theme.primaryColor};
  }
`;

const CharCounter = styled.div`
  right: 6px;
  bottom: 6px;
  position: absolute;
  font-size: 10px;
  background: #FFF1D8;
  padding: 4px 8px;
  border-radius: 16px;
  color: #562201;
  float: right;
  font-weight: bold;
`;

export default IdeaBody;