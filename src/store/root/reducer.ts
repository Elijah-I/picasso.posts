import { combineReducers } from '@reduxjs/toolkit';
import { api } from 'store/api/api';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
