import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { createStore } from 'redux';
import { searchReducer } from './search/reducers';
import { bookingsReducer } from './bookings/reducers';

export const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  bookings: bookingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
