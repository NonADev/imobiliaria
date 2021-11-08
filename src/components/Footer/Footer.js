import './Footer.scss';
//https://www.imovelweb.com.br/imoveis-aluguel-sao-paulo-sp.html

function Footer() {
    return (
        <footer>
            {/* biggest part */}
            <div className="footer-grouplist">
                {/* PAGES */}
                <ul className="footer-grouplist-list">
                    <li>Aluguel</li>
                    <li>Compra</li>
                    <li>Lançamentos</li>
                    <li>Anunciar</li>
                </ul>
                {/* FOLLOW US */}
                <ul className="footer-grouplist-list">
                    <li>Instagran</li>
                    <li>Linkedin</li>
                </ul>
                {/* APP LINKS */}
                <ul className="footer-grouplist-list">
                    <li>GOOGLE PLAY</li>
                    <li>APPLE STORE</li>
                </ul>
            </div>
            {/* copyright part */}
            <div>
                <span>© Copyright 2021 imobiliaria.com</span>
                <span>
                    <a>Termos e condições de uso</a> - <a>Termos e Condições Gerais de Contratação</a> - <a>Política de privacidade</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;