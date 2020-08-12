import { RoomsActionsTypes, SET_ROOMS } from './types';
import { IRoom } from '../../interfaces';

const initialState: Array<IRoom> = [];

export function roomsReducer(state = initialState, action: RoomsActionsTypes): Array<IRoom> {
  switch (action.type) {
    case SET_ROOMS:
      return action.payload;
    default:
      return state;
  }
}
