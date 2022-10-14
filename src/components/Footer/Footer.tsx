import styles from './Footer.module.scss';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import gmail from '../../images/gmail.svg';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.links}>
				<a
					href="https://github.com/8bitnikita"
					rel="noreferrer"
					target="_blank"
				>
					<img src={github} alt="github-logo" />
					<div>My GitHub</div>
				</a>
			</div>
			<div className={styles.links}>
				<a
					href="https://www.linkedin.com/in/8bitnikita/"
					rel="noreferrer"
					target="_blank"
				>
					<img src={linkedin} alt="linkedin-logo" />
					<div>My Linkedin</div>
				</a>
			</div>
			<div className={styles.links}>
				<a
					href="mailto:nikita.ganzha.job@gmail.com"
					rel="noreferrer"
					target="_blank"
				>
					<img src={gmail} alt="gmail-logo" />
					<div>My Gmail</div>
				</a>
			</div>
		</div>
	);
};
