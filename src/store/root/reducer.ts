import { combineReducers } from '@reduxjs/toolkit';
import { api } from 'store/root/api';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
