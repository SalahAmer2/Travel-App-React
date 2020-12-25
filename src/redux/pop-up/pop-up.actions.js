import { PopUpActionTypes } from "./pop-up.types";

export const toggleShowPopUp = () => ({
    type: PopUpActionTypes.TOGGLE_SHOW_POP_UP
})

export const togglePopUpExit = () => ({// See if you need to use payload in the first place to toggle boolean// Answer: YOU DON'T USE PAYLOAD TO TOGGLE BOOLEAN
    type: PopUpActionTypes.TOGGLE_POP_UP_EXIT           // Now we'll see the reason and way to use reducers other than the root-reducer 
                                               // Because you could simply just ! the boolean here in the payload, but we're not
                                               // doing that because we're using the pop-up.reducer.js
})

export const togglePopUp3State = (popUp) => ({
    type: PopUpActionTypes.TOGGLE_POP_UP_3_STATE,
    payload: popUp
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