import { InputsActionTypes } from "./inputs.types";

export const currentInputs = inputs => ({
    type: InputsActionTypes.CURRENT_INPUTS,
    payload: inputs
})