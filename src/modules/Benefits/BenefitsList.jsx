import './benefits.css'
import { AiOutlineTrophy } from "react-icons/ai"
export default function BenefitsList () {
	
	const benefits = [
		{
			name: "Agilidade e versatilidade na gestão",
			description: "Possibilidade de alterar, liberar ou bloquear créditos para funcionários de forma rápida e personalizada"
		},
		
		{
			name: "Pagamento via boleto com prazo confortável",
			description: "A empresa é cobrada somente quando os benefícios são utilizados, com prazo facilitado via boleto ."
		},
		
		{
			name: "Conveniência para o usuário",
			description: "Funcionários utilizam os créditos de maneira flexível em diversos serviços, incluindo alimentação e drogarias "
		},
		{
			name: "Desconto em folha de pagamento",
			description: "As compras feitas pelos colaboradores são deduzidas diretamente na folha, facilitando o controle financeiro da empresa "
		},
	]
	
	return (
		<div className="benefitLists">
			<ul>
				{benefits.map(benefit => {
					return(
						<li key={benefit.name}>
							<AiOutlineTrophy />
							<h1>{benefit.name}</h1>
							<p>{benefit.description}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}