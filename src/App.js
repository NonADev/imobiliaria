import './App.scss';
import DisplayImovel from './components/DisplayImovel/DisplayImovel';
import Footer from './components/Footer/Footer';
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
			<Footer />
		</div>
	);
}

export default App;
