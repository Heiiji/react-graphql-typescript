import { combineReducers } from 'redux'
import { userReducer } from './user/reducers'
import { createStore } from "redux";

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer);

