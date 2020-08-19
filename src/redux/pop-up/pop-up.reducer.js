import { PopUpActionTypess } from "./pop-up.types";

const INITIAL_STATE = {
    showPopUp: false,
    pop_up_exit: false,
    pop_up_3_state: false,
    submittedOrNot: false
}
//These are true and false so no need for payload just !
const popUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PopUpActionTypess.TOGGLE_SHOW_POP_UP:
            return {
                ...state,
                showPopUp: !state.showPopUp
            }
        case PopUpActionTypess.TOGGLE_POP_UP_EXIT:
            return {
                ...state,
                pop_up_exit: !state.pop_up_exit
            }
        case PopUpActionTypess.TOGGLE_POP_UP_3_STATE:
            return {
                ...state,
                pop_up_3_state: !state.pop_up_3_state
            }
        case PopUpActionTypess.TOGGLE_SUBMITTED_OR_NOT:
            return {
                ...state,
                submittedOrNot: !state.submittedOrNot
            }
        default:
            return state;
    }
}

export default popUpReducer;