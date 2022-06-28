import { connect } from "react-redux";
import { millisecondsChangeAC } from "../../Reducer/stopwatchReducer";
import { secondsChangeAC } from "../../Reducer/stopwatchReducer";
import { minutesChangeAC } from "../../Reducer/stopwatchReducer";
import { hoursChangeAC } from "../../Reducer/stopwatchReducer";
import { runningAC } from "../../Reducer/stopwatchReducer";
import { startTimerAC } from "../../Reducer/stopwatchReducer";
import { DispatchType, StateType } from "../../store/reduxStore";
import { Stopwatch } from "./Stopwatch/Stopwatch";

const mapStateToProps = (state: StateType) => {
	return {
		hours: state.stopwatch.hours,
		minutes: state.stopwatch.minutes,
		seconds: state.stopwatch.seconds,
		milliseconds: state.stopwatch.milliseconds,
		isRunning: state.stopwatch.isRunning,
		startTimer: state.stopwatch.startTimer,
	};
};
const mapDispatchToProps = (dispatch: DispatchType) => {
	return {
		millisecondsChange: (milliseconds: any) => {
			dispatch(millisecondsChangeAC(milliseconds));
		},
		secondsChange: (seconds: any) => {
			dispatch(secondsChangeAC(seconds));
		},
		minutesChange: (minutes: any) => {
			dispatch(minutesChangeAC(minutes));
		},
		hoursChange: (hours: any) => {
			dispatch(hoursChangeAC(hours));
		},
		runningChange: (isRunning: any) => {
			dispatch(runningAC(isRunning));
		},
		startTimerChange: (startTimer: any) => {
			dispatch(startTimerAC(startTimer));
		},
	};
};

export const StopwatchContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Stopwatch);
