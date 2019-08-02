import { createStore, compose, applyMiddleware } from "redux";
import middlewares from '../middlewares'
import {loadState, saveState} from './localStorage';
import reducers from "../reducers";
import throttle from 'lodash.throttle';

export default function configureStore() {
  
    const persistedState = loadState();

    const store = createStore(
        reducers,
        persistedState,
        compose(applyMiddleware(...middlewares)));

    store.subscribe(throttle(() => {
        saveState({
            idea: store.getState().idea
        });
    },1000));
    
    return store;
}