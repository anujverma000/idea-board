import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { createIdea } from '../../actions/ideaActions';

const AddIdeaAction = ({ createNewIdea }) => {
    return(
        <Wrapper onClick={createNewIdea} >Add new idea</Wrapper>
    )
}


/**
 *  STYLES
 */
const Wrapper = styled.button`
    color: ${props => props.theme.textColorInvert};
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: bold;
    min-width: 150px;
    text-align: center;
    border: 1px solid ${props => props.theme.textColorPrimary};
    background-color: ${props => props.theme.primaryColorLight};
    &:hover{
        transition: .3s;
        color: ${props => props.theme.textColorPrimary};
    }
    &:active{
        color: ${props => props.theme.primaryColor};
    }
`;

const mapDispatchToProps = dispatch => ({
    createNewIdea: () =>  dispatch(createIdea())
});

export default connect(null ,mapDispatchToProps)(AddIdeaAction)