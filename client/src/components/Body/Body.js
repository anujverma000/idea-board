import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import IdeaBoard from "../IdeaBoard/IdeaBoard";
import StartScreen from '../StartScreen/StartScreen'

const Body = ({ ideaList }) => {
  return(
      <Wrapper>
        {ideaList.length ?   <IdeaBoard/> : <StartScreen/>}
      </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;


const mapStateToProps = state => ({
  ideaList: state.idea.list || [],
});

export default connect(mapStateToProps)(Body);