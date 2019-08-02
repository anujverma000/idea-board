import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import IdeaCard from "../IdeaCard/IdeaCard";
import NavBar from "../NavBar/NavBar";
import { getAllIdeas } from '../../actions/ideaActions';

const IdeaBoard = ({ ideaList, fetchIdeas }) => {

  const [sortedIdeas, setSortedIdeas] = useState([]);

  useEffect(() => { fetchIdeas() }, [fetchIdeas]);
  

  const displayIdeaCards = ideas => {
    let ideaCards =[]
    ideas && ideas.forEach(idea => {
      ideaCards.push(<IdeaCard key={idea.id} idea={idea}/>)
    })
    return ideaCards;
  }

  const sort = ({field, type}) => {
    if(field === 'date'){
      if(type === 'asc') setSortedIdeas(ideaList.concat().sort((a,b) => new Date(a.created_date) > new Date(b.created_date)? 1: -1));
      if(type === 'desc') setSortedIdeas(ideaList.concat().sort((a,b) => new Date(b.created_date) > new Date(a.created_date)? 1: -1));
    }
    if(field === 'title'){
      if(type === 'asc') setSortedIdeas(ideaList.concat().sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase()? 1: -1));
      if(type === 'desc') setSortedIdeas(ideaList.concat().sort((a,b) => b.title.toLowerCase() > a.title.toLowerCase()? 1: -1));
    }
  }

  return(
    <>
      <NavBar sort={sort}/>
      <Wrapper>
        { displayIdeaCards( [...new Set([...sortedIdeas, ...ideaList])]) }
      </Wrapper>
    </>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.main`
  padding: 24px 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 10px;
  justify-content: center;
`;

const mapStateToProps = state => ({
  ideaList: state.idea.list || [],
});

const mapDispatchToProps = dispatch => ({
  fetchIdeas: () => dispatch(getAllIdeas())
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaBoard);