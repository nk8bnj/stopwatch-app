const MILLISECONDS_CHANGE = 'MILLISECONDS_CHANGE';
const SECONDS_CHANGE = 'SECONDS_CHANGE';
const MINUTES_CHANGE = 'MINUTES_CHANGE';
const HOURS_CHANGE = 'HOURS_CHANGE';
const IS_RUNNING_SWITCHER = 'IS_RUNNING_SWITCHER';

interface IState {
	hours: any;
	minutes: any;
	seconds: any;
	milliseconds: any;
	isRunning: boolean;
}

const initialState: IState = {
	hours: '0' + 0,
	minutes: '0' + 0,
	seconds: '0' + 0,
	milliseconds: '0' + 0,
	isRunning: false,
};

export const stopwatchReducer = (state = initialState, action: any) => {
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

		case IS_RUNNING_SWITCHER:
			return {
				...state,
				isRunning: action.isRunning,
			};

		default:
			return state;
	}
};

export const millisecondsChange = (milliseconds: any) => ({
	type: MILLISECONDS_CHANGE,
	milliseconds,
});
export const secondsChange = (seconds: any) => ({
	type: SECONDS_CHANGE,
	seconds,
});
export const minutesChange = (minutes: any) => ({
	type: MINUTES_CHANGE,
	minutes,
});
export const hoursChange = (hours: any) => ({
	type: HOURS_CHANGE,
	hours,
});
export const isRunningSwitcher = (isRunning: boolean) => ({
	type: IS_RUNNING_SWITCHER,
	isRunning,
});
