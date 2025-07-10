import CardList from "../cardList/CardList.jsx";

import clock from './icon-clock.png';
import coocerqui from './icon-coocerqui.png';
import down from './icon-down.png';
import drog from './icon-drog.png';
import money from './icon-money.png';
import up from './icon-up.png';
import { useRef, useEffect } from "react";

import './howWorks.scss'
export default function HowWorks() {
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
			ref.current.classList.add('animate');
			} else {
			ref.current.classList.remove('animate'); // 👈 Remove ao sair da tela
			}
		},
		{
			threshold: 0.2, // Ativa quando 20% estiver visível
		}
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);
	const how_it_works = [
		{
			name: "Supermercado e/ou Drogaria",
			description: "Escolha onde o benefício será utilizado.",
			firstIcon: coocerqui,
			secondIcon: drog,
		},
		{
			name: "Com ou sem desconto em folha.",
			description: "A empresa decide o modelo.",
			firstIcon: up,
			secondIcon: down,
		},
		{
			name: "Prazo personalizado",
			description: "Você define o valor do convênio e o período de uso.",
			firstIcon: clock,
			secondIcon: money,
		},
	]

	return (
		<div className="how-works" ref={ref}>
			<h1 id="howWorksTitle">Como<br />funciona?</h1>

			<ul>
				{how_it_works.map((item, index) => {
					return(
						<li key={index}>
							<CardList title={item.name} description={item.description} firstIcon={item.firstIcon} secondIcon={item.secondIcon} />
						</li>
					)
				})}
			</ul>

		</div>
	)
}
