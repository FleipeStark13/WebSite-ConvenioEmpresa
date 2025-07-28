import './cta.css';
import { FaWhatsapp } from 'react-icons/fa';
import { CiMail  } from 'react-icons/ci';
import mulher from './Mulher.png'
export default function Cta () {
	return (
		<div className="cta">
			<h1>Vamos fechar essa<br />parceria?</h1>
			<h2>Faça uma cotação on-line para você ou para sua empresa!</h2>
			<p>Entre em contato agora através de uma das opções abaixo e nós estaremos a sua espera!</p>
			<p style={{color: 'gray', fontSize: 12, marginTop: 20}}>Horário de atendimento somente das: 08:30h às 16h - Seg a Sex.</p>

			<div className="container-data">
				<figure>
					<img src={mulher} alt="" />
				</figure>
				<div className="container-labels">
					<ul>
						<h2 style={{color: 'white', textAlign: 'center'}}>Entre em contato conosco através dos links abaixo:</h2>
						<li>
							<FaWhatsapp></FaWhatsapp>
							<a href="tel:+5515997816515">(15) 99781-6515</a>
						</li>
						<li>
							<CiMail></CiMail>
							<a href="mailto:marketing@coocerqui.com.br">marketing@coocerqui.com.br</a>
						</li>
						<li>
							<CiMail></CiMail>
							<a href="mailto:sac@coocerqui.com.br"> sac@coocerqui.com.br</a>
						</li>

						
					</ul>
				</div>
			</div>

		</div>
	)
}