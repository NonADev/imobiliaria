import './App.scss';
import DisplayImovel from './components/DisplayImovel/DisplayImovel';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import imoveis from './mocks/Imoveis.json';

/**
 * @returns mapped application
*/
function App() {
	return (
		<div>
			<Navbar />
			<section style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
				{ imoveis && imoveis.map((imovel, index) => <DisplayImovel key={index} imoveis={imovel} />) }
			</section>
			<Footer />
		</div>
	);
}

export default App;
