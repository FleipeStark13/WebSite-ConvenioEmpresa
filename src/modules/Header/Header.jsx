import logo from './logo.png';
import './header.css'
export default function Header() {
	return (
		<header id='header'>
			<nav id='headNav'>
				<figure><img src={logo} /></figure>
			
				<ul>
					
					<li>
						<a href="#howWorks">Como funciona</a>
					</li>
					
					<li>
						<a href="#payment">Pagamento</a>
					</li>
					
					<li>
						<a href="#convenio">Como Utilizar</a>
					</li>
					<li>
						<a href="#cta">Contato</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
