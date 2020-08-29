import { CreateTripCardsTypes } from "./createTripCards.types";

export const createTripCardsOrNot = (tripCards) => ({
    type: CreateTripCardsTypes.CREATE_TRIP_CARDS_OR_NOT,
    payload: tripCards
})