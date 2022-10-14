import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { StopwatchContainer } from './components/StopwatchContainer/StopwatchContainer';

function App() {
	return (
		<div className="container">
			<div className="header">
				<Header />
			</div>
			<div className="stopwatchBody">
				<StopwatchContainer />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
