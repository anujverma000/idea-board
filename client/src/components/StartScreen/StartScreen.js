import React from "react";
import styled from "styled-components";
import { ReactComponent as Onboard } from './onboard.svg';
import AddIdeaAction from "../NavBar/AddIdeaAction";

const StartScreen = () => {
  return(
    <Wrapper>
      <Onboard />
        <HelpTextTitle>More Than An Idea Board</HelpTextTitle>
        <HelpTextDesc>
          Clear visible mammer to brainstorm, create plans, manage projects and more.
        </HelpTextDesc>
        <HelpList>
          <HelpLitItem><HelpLitItemCount>1</HelpLitItemCount>Instant Add/Edit</HelpLitItem>
          <HelpLitItem><HelpLitItemCount>2</HelpLitItemCount>Permanent storage</HelpLitItem>
          <HelpLitItem><HelpLitItemCount>3</HelpLitItemCount>Offline availablity</HelpLitItem>
          <HelpLitItem><HelpLitItemCount>4</HelpLitItemCount>Multi facet sorting</HelpLitItem>
          <HelpLitItem><HelpLitItemCount>5</HelpLitItemCount>Mobile Friendly</HelpLitItem>
        </HelpList>
      <AddIdeaAction/>
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 460px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  text-align: center;
`;

const HelpTextTitle = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 24px;
  font-weight: bold;
`
const HelpTextDesc = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 20px;
  font-weight: normal;
`
const HelpList = styled.ul`
  text-align: initial;
  list-style: none;
  color: ${props => props.theme.textColorLight};
  margin-bottom: 32px;
  padding: 0;
`
const HelpLitItem = styled.li`
  font-size: 16px;
  padding: 16px;
  background: #fff;
  border: 1px solid #eee;
  margin: 12px 0;
  box-shadow: 0 0 4px 0 #ddd;
`

const HelpLitItemCount = styled.span`
  background: #448aff;
  border-radius: 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 50px;
  display: inline-block;
  margin-right: 32px;
`;
export default StartScreen;