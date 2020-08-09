import {IBooking} from "../../interfaces";

export const SET_BOOKINGS = "SET_BOOKINGS";

interface SetBookingsAction {
    type: typeof SET_BOOKINGS,
    payload: Array<IBooking>
}

export type BookingsActionsTypes = SetBookingsAction