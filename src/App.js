import './App.scss';
import DisplayImovel from './components/DisplayImovel/DisplayImovel';
import Navbar from './components/Navbar/Navbar';

	/**
	 * @returns mapped application
	*/
function App() {
	return (
		<div>
			<Navbar />
			<section>
				<DisplayImovel />
			</section>
		</div>
	);
}

export default App;
