import {IProperty} from "../../interfaces";

export const SET_PROPERTIES = "SET_PROPERTIES";

interface SetPropertiesAction {
    type: typeof SET_PROPERTIES,
    payload: Array<IProperty>
}

export type PropertiesActionsTypes = SetPropertiesAction