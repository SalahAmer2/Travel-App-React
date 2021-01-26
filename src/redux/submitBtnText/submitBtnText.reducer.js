import { SubmitBtnTextActionTypes } from "./submitBtnText.types";

const INITIAL_STATE = {
    submitBtnText: "Save trip"
}

const projectDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubmitBtnTextActionTypes.SUBMIT_BUTTON_TEXT_UPDATE:
            return {
                ...state, 
                submitBtnText: action.payload
            }
        default:
            return state;
    }
}

export default projectDataReducer;