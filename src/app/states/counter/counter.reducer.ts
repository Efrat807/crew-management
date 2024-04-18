import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
	count: number;
}

export const initialCounterState: CounterState = {
	count: 0,
};

export const counterReducer = createReducer(
	initialCounterState,
	on(
		increment,
		(state): CounterState => ({ ...state, count: state.count + 1 })
	),
	on(
		decrement,
		(state): CounterState => ({ ...state, count: state.count - 1 })
	),
	on(reset, (state): CounterState => ({ ...state, count: 0 }))
);
