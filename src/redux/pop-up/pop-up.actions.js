import { PopUpActionTypes } from "./pop-up.types";

export const toggleShowPopUp = () => ({
    type: PopUpActionTypes.TOGGLE_SHOW_POP_UP
})

export const togglePopUpExit = () => ({
    type: PopUpActionTypes.TOGGLE_POP_UP_EXIT
})

export const togglePopUp3State = () => ({
    type: PopUpActionTypes.TOGGLE_POP_UP_3_STATE
})

export const toggleSubmittedOrNot = popUp => ({
    type: PopUpActionTypes.TOGGLE_SUBMITTED_OR_NOT,
    payload: popUp
})