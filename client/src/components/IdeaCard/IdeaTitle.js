import React, { useState } from "react";
import styled from "styled-components";

const IdeaTitle = ({ idea, saveIdea }) => {

  const maxLength = 140;

  const [ ideaTitle, setIdeaTitle ] = useState(idea.title);
  const [ isEdited, setIsEdited ] = useState(false);

  const saveIdeaUpdates = event => {
    if (event.keyCode === 13) {
      updateIdea();
    };
  }

  const updateIdea = () => {
    if (isEdited) {
      saveIdea(getUpdatedIdea());
      setIsEdited(false);
    }
  }

  const handleChange = e => {
    setIdeaTitle(e.target.value);
    setIsEdited(true);
  }

  const getUpdatedIdea = () => ({...idea, title: ideaTitle})

  return <TitleEditable
            value={ideaTitle} 
            onChange={handleChange} 
            type="text"
            maxLength={maxLength}
            autoFocus={ idea.new ? true: false }
            onKeyUp={saveIdeaUpdates}
            onBlur={updateIdea}
            placeholder="Add Idea"/>
}
/**
 *  STYLES
 */

const TitleEditable = styled.input`
  color: ${props => props.theme.textColorStrong};
  font-size: 16px;
  font-weight: bold;
  width: 95%;
  padding: 8px;
  border-radius: 4px;
  border: none;
  &:focus{
    outline: 1px solid ${props => props.theme.primaryColor};
  }
`
export default IdeaTitle;