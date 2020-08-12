import { PropertiesActionsTypes, SET_PROPERTIES } from './types';
import { IProperty } from '../../interfaces';

const initialState: Array<IProperty> = [];

export function propertiesReducer(state = initialState, action: PropertiesActionsTypes): Array<IProperty> {
  switch (action.type) {
    case SET_PROPERTIES:
      return action.payload;
    default:
      return state;
  }
}
