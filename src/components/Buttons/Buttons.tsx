import styles from "./Buttons.module.css";

type ButtonsType = {
	onStartHandler: () => void;
	onResetHandler: () => void;
	isRunning: boolean;
};

export const Buttons: React.FC<ButtonsType> = (props) => {
	return (
		<div className={styles.buttons}>
			<button
				onClick={props.onStartHandler}
				className={
					props.isRunning
						? styles.button + " " + styles.buttonPause
						: styles.button
				}
			>
				{props.isRunning ? "PAUSE" : "START"}
			</button>
			<button
				onClick={props.onResetHandler}
				className={styles.button + " " + styles.buttonReset}
			>
				RESET
			</button>
		</div>
	);
};
