import './benefits.scss'
import { AiOutlineTrophy } from "react-icons/ai"
import { FiZap } from 'react-icons/fi';
import { MdToggleOn } from 'react-icons/md';
import { FaRegCreditCard } from 'react-icons/fa';
import { RiTimerLine } from 'react-icons/ri';
import { useEffect, useRef } from 'react';
export default function BenefitsList () {

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

	const benefits = [
		{
			name: "Agilidade e versatilidade na gestão",
			description: "Possibilidade de alterar, liberar ou bloquear créditos para funcionários de forma rápida e personalizada",
			icon: <FiZap></FiZap>
		},
		
		{
			name: "Pagamento via boleto com prazo confortável",
			description: "A empresa é cobrada somente quando os benefícios são utilizados, com prazo facilitado via boleto .",
			icon: <MdToggleOn></MdToggleOn>

		},
		
		{
			name: "Conveniência para o usuário",
			description: "Funcionários utilizam os créditos de maneira flexível em diversos serviços, incluindo alimentação e drogarias ",
			icon: <FaRegCreditCard></FaRegCreditCard>

		},
		{
			name: "Desconto em folha de pagamento",
			description: "As compras feitas pelos colaboradores são deduzidas diretamente na folha, facilitando o controle financeiro da empresa ",
			icon: <RiTimerLine></RiTimerLine>

		},
	]
	
	return (
		<div className="benefitLists" ref={ref}>
			<ul>
				{benefits.map(benefit => {
					return(
						<li key={benefit.name}>
							{benefit.icon}
							<h1>{benefit.name}</h1>
							<p>{benefit.description}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}