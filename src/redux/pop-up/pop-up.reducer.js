import { PopUpActionTypes } from "./pop-up.types";

const INITIAL_STATE = {
    showPopUp: false,
    pop_up_exit: false,
    submittedOrNot: false,
    displayBlockOrNone_PopUp_1: false,
    displayBlockOrNone_PopUp_2: false,
    displayBlockOrNone_PopUp_3: false
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
        case PopUpActionTypes.TOGGLE_SUBMITTED_OR_NOT:
            return {
                ...state,
                submittedOrNot: action.payload
            }
        case PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_1:
            return {
                ...state,
                displayBlockOrNone_PopUp_1: action.payload
            }
        case PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_2:
            return {
                ...state,
                displayBlockOrNone_PopUp_2: action.payload
            }
        case PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_3:
            return {
                ...state,
                displayBlockOrNone_PopUp_3: action.payload
            }
        default:
            return state;
    }
}

export default popUpReducer;