import { combineReducers } from 'redux'
import { userReducer } from './user/reducers'
import { createStore } from "redux";
import {searchReducer} from "./search/reducers";

export const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer);

