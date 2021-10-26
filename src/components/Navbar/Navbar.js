import LogoImobiliaria from "../../common/imgs/gallery-svgrepo-com.svg";
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar-container">
            <img alt="logo" src={LogoImobiliaria} className="navbar-logo"/>
            <ul className="navbar-list-container">
                <li><a href="#aluguel" className="navbar-item">Aluguel</a></li>
                <li><a href="#compra" className="navbar-item">Compra</a></li>
                <li><a href="#lancamento" className="navbar-item">Lançamentos</a></li>
                <li><a href="#anunciar" className="navbar-item navbar-destaque">Anunciar</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;