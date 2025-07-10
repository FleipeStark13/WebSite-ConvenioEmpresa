import './convenio.css';
export default function Convenio () {
	
	const como_usar = [
		{
			id: '1',
			content: "Faça suas compras normalmente nas unidades da Coocerqui (Supermercado ou Drogaria, conforme definido pela empresa)."
		},
		{
			id: '2',
			content: "Na hora de pagar, informe ao atendente que o pagamento será feito via convênio.."
		},
		{
			id: '3',
			content: "Apresente um documento com foto que contenha seu CPF para validação do cadastro.."
		},
		{
			id: '4',
			content: "O valor de cada compra é descontado do saldo disponível do período vigente."
		},
		{
			id: '5',
			content: "A cada compra, o colaborador pode consultar seu saldo disponível diretamente com os(as) operadores(as) ou fiscais de caixa.."
		},
	]
	
	return (
		<div className="convenio">
			<h1>Com usar o<br />convênio</h1>
			<ul>
				{
					como_usar.map((convenio, index) => {
						return (
							<li className='convenioCard' key={index}>
								<div className="container-convenio">
									<div className="idConvenio">
										<p>
											{convenio.id}
										</p>
									</div>
									<p>
										{convenio.content}
									</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	)	
}