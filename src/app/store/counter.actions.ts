import { Action, createAction, props } from '@ngrx/store';

export const init = createAction('[counter] Init');

export const set = createAction('[counter] Set', props<{ value: number }>());

export const increment = createAction(
  '[counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[counter] Decrement',
  props<{ value: number }>()
);

// OLD WAY

// export const INCREMENT = '[counter] Increment';

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterAction = IncrementAction;
