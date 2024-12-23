import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

// import { CounterAction, INCREMENT, IncrementAction } from './counter.actions';

const initialValue = 0;

export const counterReducer = createReducer(
  initialValue,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// OLD WAY

// export function counterReducer(
//   state = initialValue,
//   action: CounterAction | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
