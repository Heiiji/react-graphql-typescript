import { IBooking } from '../../interfaces';

export const SET_BOOKINGS = 'SET_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const ADD_BOOKING = 'ADD_BOOKING';

interface SetBookingsAction {
  type: typeof SET_BOOKINGS;
  payload: Array<IBooking>;
}

interface RemoveBookingsAction {
  type: typeof REMOVE_BOOKING;
  payload: string;
}

interface AddBookingsAction {
  type: typeof ADD_BOOKING;
  payload: IBooking;
}

export type BookingsActionsTypes = SetBookingsAction | RemoveBookingsAction | AddBookingsAction;
