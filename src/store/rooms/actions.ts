import { IRoom } from '../../interfaces';
import store from '../index';
import { SET_ROOMS } from './types';

export const setRooms = (rooms: Array<IRoom>) => {
  return new Promise((resolve) => {
    store.dispatch({
      type: SET_ROOMS,
      payload: rooms,
    });
  });
};
