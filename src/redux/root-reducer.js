import { combineReducers } from "redux";

import popUpReducer from "./pop-up/pop-up.reducer";
import inputsReducer from "./inputs/inputs.reducer";
import projectDataReducer from "./projectData/projectData.reducer";
import submitBtnTextReducer from "./submitBtnText/submitBtnText.reducer";

export default combineReducers({
    popUp: popUpReducer,
    inputs: inputsReducer,
    projectData: projectDataReducer,
    text: submitBtnTextReducer
})