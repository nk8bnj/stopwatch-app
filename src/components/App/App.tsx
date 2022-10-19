import './App.scss';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import StopwatchContainer from './../StopwatchContainer/StopwatchContainer';

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
