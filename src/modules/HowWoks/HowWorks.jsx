import CardList from "../cardList/CardList.jsx";

export default function HowWorks() {

	const how_it_works = [
		{
			name: "Supermercado e/ou Drogaria",
			description: "Escolha onde o benefício será utilizado."
		},
		{
			name: "Com ou sem desconto em folha.",
			description: "A empresa decide o modelo."
		},
		{
			name: "Prazo personalizado",
			description: "Você define o valor do convênio e o período de uso."
		},
	]

	return (
		<div className="how-works">
			<h1>Como funciona?</h1>

			<ul>
				{how_it_works.map((item, index) => {
					return(
						<li key={index}>
							<CardList title={item.name} description={item.description} />
						</li>
					)
				})}
			</ul>

		</div>
	)
}
