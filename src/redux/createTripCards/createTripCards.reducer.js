import { CreateTripCardsTypes } from "./createTripCards.types";

const INITIAL_STATE = {
    createTripCardsOrNot: false,
}
const createTripCardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CreateTripCardsTypes.CREATE_TRIP_CARDS_OR_NOT:
            return {
                ...state,
                createTripCardsOrNot: action.payload
            }
        default:
            return state;
    }
}

export default createTripCardsReducer;