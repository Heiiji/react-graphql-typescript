import {IBooking} from "../../interfaces";
import store from "../index";
import {SET_BOOKINGS} from "./types";

export const setBookings = (bookings: Array<IBooking>) => {
    return new Promise(resolve => {
        store.dispatch({
            type: SET_BOOKINGS,
            payload: bookings
        });
    });
}