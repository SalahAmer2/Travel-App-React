import { InputsActionTypes } from "./inputs.types";

const INITIAL_STATE = {
    currentInputs: {}
}

const inputsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case InputsActionTypes.CURRENT_INPUTS:
            return {
                ...state,
                currentInputs: action.payload
            }
        default:
            return state;
    }
}

export default inputsReducer;