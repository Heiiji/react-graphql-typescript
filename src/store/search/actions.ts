import {CLEAR_SEARCH, Search, SET_SEARCH} from "./types";
import store from "../index";

export const setSearch = (search : Search) => {
    return new Promise((resolve) => {
        store.dispatch({
            type: SET_SEARCH,
            payload: search
        });
        resolve(search);
    });
}

export const clearSearch = () => {
    return new Promise((resolve) => {
        store.dispatch({
            type: CLEAR_SEARCH
        });
        resolve();
    });
}