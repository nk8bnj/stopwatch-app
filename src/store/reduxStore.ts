import { stopwatchReducer } from "./../Reducer/stopwatchReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		stopwatch: stopwatchReducer,
	},
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
