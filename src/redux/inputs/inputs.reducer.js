const INITIAL_STATE = {
    inputs: {}
}

const inputsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case popUpActionTypes.SET_INPUTS:
            return {
                ...state,
                inputs: action.payload
            }
        default:
            return state;
    }
}

export default inputsReducer;