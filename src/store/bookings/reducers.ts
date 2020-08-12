import { ADD_BOOKING, BookingsActionsTypes, REMOVE_BOOKING, SET_BOOKINGS } from './types';
import { IBooking } from '../../interfaces';

const initialState: Array<IBooking> = [];

export function bookingsReducer(state = initialState, action: BookingsActionsTypes): Array<IBooking> {
  switch (action.type) {
    case SET_BOOKINGS:
      return action.payload;
    case ADD_BOOKING:
      return state.concat(action.payload);
    case REMOVE_BOOKING:
      return state.filter((booking) => booking.id !== action.payload);
    default:
      return state;
  }
}
