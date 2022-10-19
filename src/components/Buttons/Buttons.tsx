import styles from './Buttons.module.scss';

interface IButtons {
	onStartHandler: () => void;
	onResetHandler: () => void;
	isRunning: boolean;
}

const Buttons: React.FC<IButtons> = (props) => {
	return (
		<div className={styles.container}>
			<button
				onClick={props.onStartHandler}
				className={
					props.isRunning
						? styles.button + ' ' + styles.buttonPause
						: styles.button
				}
			>
				{props.isRunning ? 'PAUSE' : 'START'}
			</button>
			<button
				onClick={props.onResetHandler}
				className={styles.button + ' ' + styles.buttonReset}
			>
				RESET
			</button>
		</div>
	);
};

export default Buttons;
