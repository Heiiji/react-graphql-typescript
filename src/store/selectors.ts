import {IBooking} from "../interfaces";

export const getUser = (store: any) => store.user;


export const getSearch = (store: any) => store.search;


export const getBookings = (store: any) => store.bookings;
export const getRoomBookings = (store: any, roomId: string) => store.bookings.filter((book: IBooking) => book.roomId === roomId);