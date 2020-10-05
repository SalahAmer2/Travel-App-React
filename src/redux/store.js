import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";//It is actually combineReducers but named rootReducer here in this file, and remember it's from the root-reducer file

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;