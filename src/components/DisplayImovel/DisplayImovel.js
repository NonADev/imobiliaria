import './DisplayImovel.scss';

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
                <div>
                    <div>
                        66 m²
                    </div>
                    <div>
                        1 quarto
                    </div>
                    <div>
                        1 ban
                    </div>
                </div>
                <div>
                    <h3>Apartamento 01 Dormitório, Reformadíssimo, Frente Metrô E Praça Da Liberdade, Faculdades - Liberdade.</h3>
                </div>
                <div>
                    <h4>Excelente apartamento frente para o metrô e praça da liberdade, ao lado corredores de ônibus, Av Liberdade,...</h4>
                </div>
            </article>
        </div>
    );
}

export default DisplayImovel;