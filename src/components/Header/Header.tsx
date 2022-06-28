import styles from "./Header.module.css";
import ReactLogo from "../../images/react-logo.svg";
import ReduxLogo from "../../images/redux-logo.svg";

export const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<b>Stopwatch</b> made with <img src={ReactLogo} alt="react-logo" />
				<span className={styles.react}>React</span> +{" "}
				<img src={ReduxLogo} alt="redux-logo" />
				<span className={styles.redux}>Redux</span>
			</div>
		</div>
	);
};
