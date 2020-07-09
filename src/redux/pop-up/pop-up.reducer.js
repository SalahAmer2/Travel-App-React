const INITIAL_STATE = {
    pop_up_3_state: false,
    showPopUp: false,
    pop_up_exit: false,
    submittedOrNot: false
}

const popUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case popUpActionTypes.TOGGLE_POP_UP_3_STATE:
            return {
                ...state,
                pop_up_3_state: action.payload
            }
        case popUpActionTypes.TOGGLE_SHOW_POP_UP:
            return {
                ...state,
                showPopUp: action.payload
            }
        case popUpActionTypes.TOGGLE_POP_UP_EXIT:
            return {
                ...state,
                pop_up_exit: action.payload
            }
        case popUpActionTypes.TOGGLE_SUBMITTED_OR_NOT:
            return {
                ...state,
                submittedOrNot: action.payload
            }
        default:
            return state;
    }
}

export default popUpReducer;