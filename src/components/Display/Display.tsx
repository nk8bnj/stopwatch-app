import styles from "./Display.module.css";

type DisplayType = {
	hours: string;
	minutes: string;
	seconds: string;
	milliseconds: string;
};

export const Display: React.FC<DisplayType> = (props) => {
	return (
		<div className={styles.display}>
			<div className={styles.displayNumbers}>
				<div
					className={
						props.hours !== "00"
							? styles.title + " " + styles.hours
							: styles.title
					}
				>
					HOURS
				</div>
				<span className={styles.numbers}>{props.hours}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.displayNumbers}>
				<div
					className={
						props.minutes !== "00" || props.hours !== "00"
							? styles.title + " " + styles.minutes
							: styles.title
					}
				>
					MINUTES
				</div>
				<span className={styles.numbers}>{props.minutes}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.displayNumbers}>
				<div
					className={
						props.seconds !== "00" || props.minutes !== "00"
							? styles.title + " " + styles.seconds
							: styles.title
					}
				>
					SECONDS
				</div>
				<span className={styles.numbers}>{props.seconds}</span>
			</div>
			<div className={styles.dots}>:</div>
			<div className={styles.displayNumbers}>
				<div
					className={
						props.milliseconds !== "00"
							? styles.title + " " + styles.milliseconds
							: styles.title
					}
				>
					MILLISECONDS
				</div>
				<span className={styles.numbers}>{props.milliseconds}</span>
			</div>
		</div>
	);
};
