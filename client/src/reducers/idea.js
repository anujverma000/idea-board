import { Types }  from "../actions/ideaActions";

const defaultState = {
  list: []
};

const idea = (state = defaultState, action) => {
  switch (action.type) {
    case Types.LOAD_IDEAS: {
      return {
        ...state,
        list: action.payload
      }
    }
    case Types.ADD_NEW_IDEA: {
      return {
        ...state,
        list: [ action.payload, ...state.list ]
      }
    }
    case Types.UPDATE_IDEA: {
      return {
        ...state,
        list: state.list.map(idea => idea.id === action.payload.id? action.payload: idea)
      }
    }
    case Types.DELETE_IDEA: {
      return {
        ...state,
        list: state.list.filter(idea => idea.id !== action.payload)
      }
    }
    default:
      return state;
  }
};

export default idea;