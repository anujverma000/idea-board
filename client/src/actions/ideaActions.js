import createAction from './actionCreator';
import until from './until';

const BASE_URL = 'http://localhost:9000';
const NEW_IDEA = `${BASE_URL}/ideas/new`;

const GET_IDEA = `${BASE_URL}/ideas`;
const UPDATE_IDEA = `${BASE_URL}/ideas/update`;
const DELETE_IDEA = `${BASE_URL}/ideas/delete`;

export const Types = {
    LOAD_IDEAS: "LOAD_IDEAS",
    LOAD_IDEAS_ERROR: "LOAD_IDEAS_ERROR",

    ADD_NEW_IDEA: "ADD_NEW_IDEA",
    CREATE_IDEA_ERROR: "CREATE_IDEA_ERROR",

    UPDATE_IDEA: "UPDATE_IDEA",
    UPDATE_IDEA_ERROR: "UPDATE_IDEA_ERROR",

    DELETE_IDEA: "DELETE_IDEA",
    DELETE_IDEA_ERROR: "DELETE_IDEA_ERROR",
};

export const getAllIdeas = () => async (dispatch) => {
    let [error, resp] = await until(fetch(GET_IDEA));
    if(resp){
        [error, resp] = await until(resp.json());
        if(resp){
           dispatch(createAction(Types.LOAD_IDEAS, resp));
        }
    }
    if(error){
        dispatch(createAction(Types.LOAD_IDEAS_ERROR, error));
    }
}

export const createIdea = () => async (dispatch) => {
    let [error, resp] = await until(fetch(NEW_IDEA));
    if(resp){
        [error, resp] = await until(resp.json());
        if(resp){
           dispatch(createAction(Types.ADD_NEW_IDEA, {...resp, new: true }));
        }
    }
    if(error){
        dispatch(createAction(Types.CREATE_IDEA_ERROR, error));
    }
}


export const updateIdea = ideaInstance => dispatch => new Promise(async (resolve, reject) => {
    let [error, resp] = await until(fetch(UPDATE_IDEA, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaInstance)
    }));
    if(resp){
        [error, resp] = await until(resp.json());
        if(resp){
           dispatch(createAction(Types.UPDATE_IDEA, {...resp, new: false }));
           resolve();
        }
    }
    if(error){
        dispatch(createAction(Types.UPDATE_IDEA_ERROR, error));
        reject()
    }
})

export const deleteIdea = id => async (dispatch) => {
    let [error, resp] = await until(fetch(DELETE_IDEA, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    }));
    if(resp){
        [error, resp] = await until(resp.json());
        if(resp){
           dispatch(createAction(Types.DELETE_IDEA, id));
        }
    }
    if(error){
        dispatch(createAction(Types.DELETE_IDEA_ERROR, error));
    }
}