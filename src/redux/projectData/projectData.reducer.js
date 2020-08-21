import { PopUpActionTypes } from "../pop-up/pop-up.types";

const INITIAL_STATE = {
    projectDataState: {}
}

const projectDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PopUpActionTypes.SET_PROJECT_DATA:
            return {
                ...state,
                projectDataState: action.payload
            }
        default:
            return state;
    }
}

export default projectDataReducer;