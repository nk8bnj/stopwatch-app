export interface IStopwatch {
	milliseconds: string | number;
	seconds: string | number;
	minutes: string | number;
	hours: string | number;
	isRunning: boolean;
	millisecondsChange: (milliseconds: string | number) => void;
	secondsChange: (seconds: string | number) => void;
	minutesChange: (minutes: string | number) => void;
	hoursChange: (hours: string | number) => void;
	isRunningSwitcher: (isRunning: boolean) => void;
}
