import './DisplayImovel.scss';
import SquareFootSvg from "../../assets/imgs/square_foot.svg";
import BedSvg from "../../assets/imgs/bed.svg";
import WcSvg from "../../assets/imgs/wc.svg";

function DisplayImovel(props) {
    return (
        <div className="displayImovel-imovel">
            <div className="displayImovel-carousel">
                <img className="displayImovel-carousel-image" alt="foto principal" src="https://imgbr.imovelwebcdn.com/avisos/2/29/58/72/94/54/360x266/2360901762.jpg"/>
            </div>
            <article className="displayImovel-content">
                <div className="displayImovel-content-principal">
                    <div className="displayImovel-content-principal-precos">
                        <span className="displayImovel-content-principal-precos-preco">R$ {props.imoveis.preco}</span>
                        <span className="displayImovel-content-principal-precos-condominio">+ R$ {props.imoveis.condominio} Condomínio</span>
                    </div>
                    <div className="displayImovel-content-principal-localidade">
                        <span className="displayImovel-content-principal-localidade-endereco">{props.imoveis.endereco}</span>
                        <span className="displayImovel-content-principal-localidade-bairro-cidade">{props.imoveis.bairro}</span>
                    </div>
                </div>
                <div className="displayImovel-content-extra">
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={SquareFootSvg}/>
                        <span className="displayImovel-content-extra-item-texto">{props.imoveis.tamanho} m²</span>
                    </div>
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={BedSvg}/>
                        <span className="displayImovel-content-extra-item-texto">{props.imoveis.quartos} quarto</span>
                    </div>
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={WcSvg}/>
                        <span className="displayImovel-content-extra-item-texto">{props.imoveis.banheiros} ban</span>
                    </div>
                </div>
                <div className="displayImovel-content-descritivo">
                    <h3 className="displayImovel-content-descritivo-texto">{props.imoveis.descritivoPrincipal}</h3>
                </div>
                <div className="displayImovel-content-adicionais">
                    <h4 className="displayImovel-content-adicionais-texto">{props.imoveis.descritivoSegundario}</h4>
                </div>
            </article>
        </div>
    );
}

export default DisplayImovel;