import React, { useState } from 'react';
import Buttons from '../../Buttons/Buttons';
import Display from '../../Display/Display';
import { IStopwatch } from '../StopwatchType';
import styles from './Stopwatch.module.scss';

const Stopwatch: React.FC<IStopwatch> = (
	props
): React.ReactElement<IStopwatch> => {
	let [mlsec, setMlsec] = useState<number>(0);
	let [sec, setSec] = useState<number>(0);
	let [min, setMin] = useState<number>(0);
	let [hour, setHour] = useState<number>(0);
	let [intervalId, setIntervalId] = useState<number>(0);

	const twoDigitNumber = (
		number: number,
		timeChange: (number: number | string) => void
	) => {
		number < 10 ? timeChange('0' + number) : timeChange(number);
	};

	const onStartHandler = () => {
		if (!props.isRunning) {
			props.isRunningSwitcher(true);
			const interval: number = window.setInterval(() => {
				//MILLISECONDS
				setMlsec(++mlsec);
				twoDigitNumber(mlsec, props.millisecondsChange);
				if (mlsec === 99) {
					mlsec = 0;

					//SECONDS
					setSec(++sec);
					twoDigitNumber(sec, props.secondsChange);
					if (sec === 60) {
						sec = 0;
						props.secondsChange('0' + sec);

						// MINUTES
						setMin(++min);
						twoDigitNumber(min, props.minutesChange);
						if (min === 60) {
							min = 0;
							props.minutesChange('0' + min);

							// HOURS
							setHour(++hour);
							twoDigitNumber(hour, props.hoursChange);
						}
					}
				}
			}, 10);
			setIntervalId(interval);
			// );
		} else {
			clearInterval(intervalId);
			props.isRunningSwitcher(false);
		}
	};

	const onResetHandler = () => {
		clearInterval(intervalId);
		props.isRunningSwitcher(false);
		setMlsec(0);
		setSec(0);
		setMin(0);
		setHour(0);
		props.millisecondsChange('0' + 0);
		props.secondsChange('0' + 0);
		props.minutesChange('0' + 0);
		props.hoursChange('0' + 0);
	};

	return (
		<div className={styles.stopwatch}>
			<Display
				hours={props.hours}
				minutes={props.minutes}
				seconds={props.seconds}
				milliseconds={props.milliseconds}
			/>
			<Buttons
				onStartHandler={onStartHandler}
				onResetHandler={onResetHandler}
				isRunning={props.isRunning}
			/>
		</div>
	);
};

export default Stopwatch;
