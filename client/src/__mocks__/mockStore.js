import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState= {
    idea: {
        list: []
    }
}
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
store.replaceReducer(rootReducer);

export default store;