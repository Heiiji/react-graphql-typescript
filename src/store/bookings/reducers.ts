import {BookingsActionsTypes, SET_BOOKINGS} from "./types";
import {IBooking} from "../../interfaces";

const initialState : Array<IBooking> = []

export function bookingsReducer(
    state = initialState,
    action: BookingsActionsTypes
) : Array<IBooking> {
    switch (action.type) {
        case SET_BOOKINGS:
            return action.payload;
        default:
            return state
    }
}