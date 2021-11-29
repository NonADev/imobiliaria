import './Footer.scss';
import TwitterLogo from "../../assets/imgs/twitter_logo_icon.svg";
import InstagranLogo from "../../assets/imgs/instagram_icon.svg";
import LinkedinLogo from "../../assets/imgs/linkedin_logo_icon.svg";
import AppleLogo from "../../assets/imgs/104490_apple_icon.svg";
import GoogleplayLogo from "../../assets/imgs/317742_google_google play_icon.svg";

function Footer() {
    return (
        <footer className="footer">
            {/* biggest part */}
            <div className="footer-grouplist">
                <div>
                    <h3 className="footer-title">mais</h3>
                    <ul className="footer-grouplist-list">
                        <li>Alugue</li>
                        <li>Compre</li>
                        <li>Visite os lançamentos</li>
                        <li>Anuncie aqui</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">siga-nos</h3>
                    <ul className="footer-grouplist-list footer-grouplist-list-icons">
                        <li><img alt="" src={TwitterLogo}/></li>
                        <li><img alt="" src={InstagranLogo}/></li>
                        <li><img alt="" src={LinkedinLogo}/></li>
                    </ul>
                    <h3 className="footer-title">apps</h3>
                    <ul className="footer-grouplist-list footer-grouplist-list-appstores">
                        <li><img alt="" src={AppleLogo}/></li>
                        <li><img alt="" src={GoogleplayLogo}/></li>
                    </ul>
                </div>
            </div>

            {/* copyright part */}
            <div className="footer-copyright">
                <span>© Copyright 2021 imobiliaria.com</span>
                <span className="footer-copyright-list">
                    <a href="#a" className="footer-copyright-list-link">Termos e condições de uso</a>
                    <a href="#a" className="footer-copyright-list-link">Termos e Condições Gerais de Contratação</a>
                    <a href="#a" className="footer-copyright-list-link">Política de privacidade</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;