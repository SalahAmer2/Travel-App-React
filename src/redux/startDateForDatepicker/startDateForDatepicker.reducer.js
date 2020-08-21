import { PopUpActionTypes } from "../pop-up/pop-up.types";

const INITIAL_STATE = {
    startDateForDatepicker: {}
}

const startDateForDatepicker_Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PopUpActionTypes.SET_START_DATE_FOR_DATEPICKER:
            return {
                ...state,
                startDateForDatepicker: action.payload
            }
        default:
            return state;
    }
}

export default startDateForDatepicker_Reducer;