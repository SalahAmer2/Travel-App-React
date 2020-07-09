import { combineReducers } from "redux";

import popUpReducer from "./pop-up/pop-up.reducer";

export default combineReducers({
    popUp: popUpReducer
})