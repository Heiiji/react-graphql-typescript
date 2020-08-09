import {IProperty} from "../../interfaces";
import store from "../index";
import {SET_PROPERTIES} from "./types";

export const setProperties = (properties: Array<IProperty>) => {
    return new Promise(resolve => {
        store.dispatch({
            type: SET_PROPERTIES,
            payload: properties
        });
    });
}