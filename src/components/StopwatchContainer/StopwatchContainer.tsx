import React from 'react';
import { connect } from 'react-redux';
import { millisecondsChange } from '../../Reducer/stopwatchReducer';
import { secondsChange } from '../../Reducer/stopwatchReducer';
import { minutesChange } from '../../Reducer/stopwatchReducer';
import { hoursChange } from '../../Reducer/stopwatchReducer';
import { isRunningSwitcher } from '../../Reducer/stopwatchReducer';
import { StateType } from '../../store/reduxStore';
import Stopwatch from './Stopwatch/Stopwatch';
import { IStopwatch } from './StopwatchType';

const StopwatchContainer: React.FC<IStopwatch> = (props) => {
	return (
		<div>
			<Stopwatch {...props} />
		</div>
	);
};

const mapStateToProps = (state: StateType) => {
	return {
		hours: state.stopwatch.hours,
		minutes: state.stopwatch.minutes,
		seconds: state.stopwatch.seconds,
		milliseconds: state.stopwatch.milliseconds,
		isRunning: state.stopwatch.isRunning,
	};
};

export default connect(mapStateToProps, {
	millisecondsChange,
	secondsChange,
	minutesChange,
	hoursChange,
	isRunningSwitcher,
})(StopwatchContainer);
