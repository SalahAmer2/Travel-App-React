import { SubmitBtnTextActionTypes } from "./submitBtnText.types";

export const submitBtnText_Update = text => ({
    type: SubmitBtnTextActionTypes.SUBMIT_BUTTON_TEXT_UPDATE,
    payload: text
})