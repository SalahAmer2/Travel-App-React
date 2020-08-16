import { PopUpActionTypes } from "./pop-up.types";

export const toggleShowPopUp = popUp => ({
    type: PopUpActionTypes.TOGGLE_SHOW_POP_UP,
    payload: popUp
})

export const togglePopUpExit = popUp => ({// See if you need to use payload in the first place to toggle boolean
    type: PopUpActionTypes.TOGGLE_POP_UP_EXIT,           // Now we'll see the reason and way to use reducers other than the root-reducer
    //payload: popUp                      // Because you could simply just ! the boolean here in the payload, but we're not
                                          // doing that because we're using the pop-up.reducer.js
})

export const togglePopUp3State = popUp => ({
    type: PopUpActionTypes.TOGGLE_POP_UP_3_STATE,
    payload: popUp
})

export const toggleSubmittedOrNot = popUp => ({
    type: PopUpActionTypes.TOGGLE_SUBMITTED_OR_NOT,
    payload: popUp
})