import LogoImobiliaria from "../../common/imgs/gallery-svgrepo-com.svg";
import './Navbar.scss';

function Navbar() {
    return (
        <nav>
            <img alt="logo" src={LogoImobiliaria} className="navbar-logo"/>
            <ul>
                <li>Compra</li>
                <li>Aluguel</li>
                <li>Lançamentos</li>
                <li>Anunciar</li>
            </ul>
        </nav>
    )
}

export default Navbar;