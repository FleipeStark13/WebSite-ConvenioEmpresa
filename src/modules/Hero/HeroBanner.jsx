import pinheiros from './Pinheiros.webp';
import './hero.css';


import logoNeg from './logoNeg.png';
import logoNegDrog from './logoNegDrog.png';
export default function HeroBanner () {
	return (
		<div className="hero">
			<div className="container-hero">
				<div className="left-content">
					<p id='compreenda'>Compreenda tudo sobre o nosso</p>
					<h1>Convênio<br />Empresa</h1>
					<p>Facilidade para sua empresa, benefícios reais para seus colaboradores. Controle de crédito, uso em supermercados e drogarias, desconto em folha ou não — tudo com gestão simples e pagamento via boleto..</p>

					<a href="#howWorks">
						<button>
							CONHECER BENEFÍCIOS
						</button>
					</a>
					<div className="flexLogos" style={{display: 'flex', gap: 20}}>
						<figure>
							<img src={logoNeg} alt="" />
						</figure>
						<figure>
							<img src={logoNegDrog} alt="" />
						</figure>
					</div>


				</div>

				<div className="right-content">
					<figure>
						<img src={pinheiros} alt="Pinheiros Coocerqui" />
					</figure>
				</div>
			</div>
		</div>
	)
}