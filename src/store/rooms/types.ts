import { IRoom } from '../../interfaces';

export const SET_ROOMS = 'SET_ROOMS';
export const REMOVE_ROOM = 'REMOVE_ROOM';

interface SetRoomsAction {
  type: typeof SET_ROOMS;
  payload: Array<IRoom>;
}

export type RoomsActionsTypes = SetRoomsAction;
