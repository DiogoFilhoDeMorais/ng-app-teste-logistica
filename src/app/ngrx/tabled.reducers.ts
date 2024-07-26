import { createReducer, on } from '@ngrx/store';
import { increment } from './tabled.actions';

export const initialAppState: Array<any> = [];

export const tableDReducer = createReducer(
  initialAppState,
  on(increment, (state, payload) => ({
    ...state,
    deliveries: payload,
  })),
);

