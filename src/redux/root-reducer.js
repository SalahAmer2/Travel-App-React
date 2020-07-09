import { combineReducers } from "redux";

import popUpReducer from "./pop-up/pop-up.reducer";
import inputsReducer from "./inputs/inputs.reducer";
import projectDataReducer from "./projectData/projectData.reducer";
import startDateForDatepicker_Reducer from "./startDateForDatepicker/startDateForDatepicker.reducer";

export default combineReducers({
    popUp: popUpReducer,
    inputs: inputsReducer,
    projectData: projectDataReducer,
    startDate: startDateForDatepicker_Reducer
})