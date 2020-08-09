import {IRoom} from "../../interfaces";

export const SET_ROOMS = "SET_ROOMS";

interface SetRoomsAction {
    type: typeof SET_ROOMS,
    payload: Array<IRoom>
}

export type RoomsActionsTypes = SetRoomsAction