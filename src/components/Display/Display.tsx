import styles from './Display.module.scss';

interface IDisplay {
	hours: string | number;
	minutes: string | number;
	seconds: string | number;
	milliseconds: string | number;
}

const Display: React.FC<IDisplay> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.numbers}>
				<div
					className={
						props.hours !== '00'
							? styles.title + ' ' + styles.hours
							: styles.title
					}
				>
					HOURS
				</div>
				<span>{props.hours}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.numbers}>
				<div
					className={
						props.minutes !== '00' || props.hours !== '00'
							? styles.title + ' ' + styles.minutes
							: styles.title
					}
				>
					MINUTES
				</div>
				<span>{props.minutes}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.numbers}>
				<div
					className={
						props.seconds !== '00' || props.minutes !== '00'
							? styles.title + ' ' + styles.seconds
							: styles.title
					}
				>
					SECONDS
				</div>
				<span>{props.seconds}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.numbers}>
				<div
					className={
						props.milliseconds !== '00'
							? styles.title + ' ' + styles.milliseconds
							: styles.title
					}
				>
					MILLISECONDS
				</div>
				<span>{props.milliseconds}</span>
			</div>
		</div>
	);
};

export default Display;
