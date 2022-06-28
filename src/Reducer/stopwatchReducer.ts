const MILLISECONDS_CHANGE = "MILLISECONDS_CHANGE";
const SECONDS_CHANGE = "SECONDS_CHANGE";
const MINUTES_CHANGE = "MINUTES_CHANGE";
const HOURS_CHANGE = "HOURS_CHANGE";
const RUNNING = "RUNNING";
const START_TIMER = "START_TIMER";

type initialStateType = {
	hours: any;
	minutes: any;
	seconds: any;
	milliseconds: any;
	isRunning: boolean;
	startTimer: any;
};

const initialState = {
	hours: "0" + 0,
	minutes: "0" + 0,
	seconds: "0" + 0,
	milliseconds: "0" + 0,
	isRunning: false,
	startTimer: false,
};

export const stopwatchReducer = (
	state: initialStateType = initialState,
	action: any
) => {
	switch (action.type) {
		case MILLISECONDS_CHANGE:
			return {
				...state,
				milliseconds: action.milliseconds,
			};

		case SECONDS_CHANGE:
			return {
				...state,
				seconds: action.seconds,
			};

		case MINUTES_CHANGE:
			return {
				...state,
				minutes: action.minutes,
			};

		case HOURS_CHANGE:
			return {
				...state,
				hours: action.hours,
			};

		case RUNNING:
			return {
				...state,
				isRunning: action.isRunning,
			};
		case START_TIMER:
			return {
				...state,
				startTimer: action.startTimer,
			};

		default:
			return state;
	}
};

export const millisecondsChangeAC = (milliseconds: any) => ({
	type: MILLISECONDS_CHANGE,
	milliseconds,
});
export const secondsChangeAC = (seconds: any) => ({
	type: SECONDS_CHANGE,
	seconds,
});
export const minutesChangeAC = (minutes: any) => ({
	type: MINUTES_CHANGE,
	minutes,
});
export const hoursChangeAC = (hours: any) => ({
	type: HOURS_CHANGE,
	hours,
});
export const runningAC = (isRunning: boolean) => ({
	type: RUNNING,
	isRunning,
});
export const startTimerAC = (startTimer: any) => ({
	type: START_TIMER,
	startTimer,
});
