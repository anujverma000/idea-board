import React from "react";
import styled from "styled-components";
import welcome from './welcome.png';
import AddIdeaAction from "../NavBar/AddIdeaAction";

const StartScreen = () => {
  return(
    <Wrapper>
      <Welcome src={welcome} alt="Welcome" />
      <HelpTextTitle>More Than An Idea Board</HelpTextTitle>
      <HelpTextDesc>
        Clear visible mammer to brainstorm, create plans, manage projects and more.
      </HelpTextDesc>
      <AddIdeaAction/>
      <HelpListTitle>
        Highlighted Feature List
      </HelpListTitle>
      <HelpList>
        <HelpLitItem>Instant Add/Edit</HelpLitItem>
        <HelpLitItem>Update Notifications</HelpLitItem>
        <HelpLitItem>Permanent storage</HelpLitItem>
        <HelpLitItem>Offline availablity</HelpLitItem>
        <HelpLitItem>Multi facet sorting</HelpLitItem>
        <HelpLitItem>Mobile Friendly</HelpLitItem>
      </HelpList>
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

const Welcome = styled.img`
  width: 140px;
  height: 140px;
  margin: 42px auto 0
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
  padding-left: 25%;
  color: ${props => props.theme.textColorLight};
  margin-bottom: 32px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: 32px;
`
const HelpLitItem = styled.li`
  font-size: 16px;
  padding: 16px;
  background: #fff;
  margin: 12px 0;
  width: 40%;
`
const HelpListTitle = styled.div`
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
`;
export default StartScreen;