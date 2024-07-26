import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Delivaries Component] Increment',
  props<{ payload: any[] }>()
);
