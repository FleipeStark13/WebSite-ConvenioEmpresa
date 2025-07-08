import { AiOutlineTrophy } from "react-icons/ai"
export default function BenefitsList () {
	
	const benefits = [
		{
			name: "Benefício 1",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugiat hic odit repellat iusto fuga porro vel dolorum molestiae neque!"
		},
		
		{
			name: "Benefício 2",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugiat hic odit repellat iusto fuga porro vel dolorum molestiae neque!"
		},
		
		{
			name: "Benefício 3",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugiat hic odit repellat iusto fuga porro vel dolorum molestiae neque!"
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