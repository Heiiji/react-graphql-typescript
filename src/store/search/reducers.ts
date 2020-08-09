import {CLEAR_SEARCH, SearchActionsTypes, SearchState, SET_SEARCH} from "./types";

const initialState :SearchState = {
    text: ""
}

export function searchReducer(
    state = initialState,
    action: SearchActionsTypes
) : SearchState {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        case CLEAR_SEARCH:
            return {
                text: ""
            }
        default:
            return state
    }
}