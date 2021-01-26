import { PopUpActionTypes } from "./pop-up.types";

export const toggleShowPopUp = () => ({
    type: PopUpActionTypes.TOGGLE_SHOW_POP_UP
})

export const togglePopUpExit = () => ({
    type: PopUpActionTypes.TOGGLE_POP_UP_EXIT
})

export const toggleSubmittedOrNot = (popUp) => ({
    type: PopUpActionTypes.TOGGLE_SUBMITTED_OR_NOT,
    payload: popUp
})

export const displayBlockOrNone_PopUp_1 = (popUp) => ({
    type: PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_1,
    payload: popUp
})

export const displayBlockOrNone_PopUp_2 = (popUp) => ({
    type: PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_2,
    payload: popUp
})

export const displayBlockOrNone_PopUp_3 = (popUp) => ({
    type: PopUpActionTypes.DISPLAY_BLOCK_OR_NONE_POP_UP_3,
    payload: popUp
})