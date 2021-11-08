import './DisplayImovel.scss';
import SquareFootSvg from "../../common/imgs/square_foot.svg";
import BedSvg from "../../common/imgs/bed.svg";
import WcSvg from "../../common/imgs/wc.svg";

//https://www.imovelweb.com.br/imoveis-aluguel-sao-paulo-sp.html
function DisplayImovel() {
    return (
        <div style={{marginTop: '5vh', marginLeft: '3vw'}} className="displayImovel-imovel">
            <div className="displayImovel-carousel">
                <img className="displayImovel-carousel-image" alt="foto principal" src="https://imgbr.imovelwebcdn.com/avisos/2/29/58/72/94/54/360x266/2360901762.jpg"/>
            </div>
            <article className="displayImovel-content">
                <div className="displayImovel-content-principal">
                    <div className="displayImovel-content-principal-precos">
                        <span className="displayImovel-content-principal-precos-preco">R$ 1.620</span>
                        <span className="displayImovel-content-principal-precos-condominio">+ R$ 481 Condomínio</span>
                    </div>
                    <div className="displayImovel-content-principal-localidade">
                        <span className="displayImovel-content-principal-localidade-endereco">PÇ Da Liberdade 107</span>
                        <span className="displayImovel-content-principal-localidade-bairro-cidade">Liberdade, São Paulo</span>
                    </div>
                </div>
                <div className="displayImovel-content-extra">
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={SquareFootSvg}/>
                        <span className="displayImovel-content-extra-item-texto">66 m²</span>
                    </div>
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={BedSvg}/>
                        <span className="displayImovel-content-extra-item-texto">1 quarto</span>
                    </div>
                    <div className="displayImovel-content-extra-item">
                        <img className="displayImovel-content-extra-item-imagem" alt="logo" src={WcSvg}/>
                        <span className="displayImovel-content-extra-item-texto">1 ban</span>
                    </div>
                </div>
                <div className="displayImovel-content-descritivo">
                    <h3 className="displayImovel-content-descritivo-texto">Apartamento 01 Dormitório, Reformadíssimo, Frente Metrô E Praça Da Liberdade, Faculdades - Liberdade.</h3>
                </div>
                <div className="displayImovel-content-adicionais">
                    <h4 className="displayImovel-content-adicionais-texto">Excelente apartamento frente para o metrô e praça da liberdade, ao lado corredores de ônibus, Av Liberdade,...</h4>
                </div>
            </article>
        </div>
    );
}

export default DisplayImovel;