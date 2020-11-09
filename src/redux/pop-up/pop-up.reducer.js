import { PopUpActionTypes } from "./pop-up.types";

const INITIAL_STATE = {
    showPopUp: false,
    pop_up_exit: false,
    pop_up_3_state: false,
    submittedOrNot: false
}

const popUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PopUpActionTypes.TOGGLE_SHOW_POP_UP:
            return {
                ...state,
                showPopUp: !state.showPopUp
            }
        case PopUpActionTypes.TOGGLE_POP_UP_EXIT:
            return {
                ...state,
                pop_up_exit: !state.pop_up_exit
            }
        case PopUpActionTypes.TOGGLE_POP_UP_3_STATE:
            return {
                ...state,
                pop_up_3_state: !state.pop_up_3_state
            }
        case PopUpActionTypes.TOGGLE_SUBMITTED_OR_NOT:
            return {
                ...state,
                submittedOrNot: action.payload
            }
        default:
            return state;
    }
}

export default popUpReducer;