import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import track from "./track";

const rootReducer = (combineReducers({ track }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;