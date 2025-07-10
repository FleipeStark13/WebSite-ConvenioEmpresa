import './options.css';
import CardList2 from '../cardList/CardList2';
export default function OptionsBenefits () {
	
	const benefits1 = [
		'A cada compra, o valor é debitado do saldo disponível.',
		'A empresa pode optar por descontar ou não o valor utilizado (a maioria opta por não descontar).',
		'Ideal para programas de qualidade de vida e apoio à alimentação'
	]
	const benefits2 = [
		'Normalmente sem desconto — fica a critério da empresa.',
		'Uso único: o valor deve ser consumido em uma única compra.',
		'Tem caráter simbólico e pontual, promovendo reconhecimento e engajamento.'
	]

	const benefitOpt = [
		'Benefício oferecido pelas empresas aos seus colaboradores para a compra de alimentos ou itens de drogaria nas lojas COOCERQUI.',
		' Utilizado como bonificação, premiação ou incentivo em campanhas motivacionais.',
	]
	
	return (
		<div className="optionsBenefits">

			<h1 id='titleOptions'>Opções de<br />Benefícios</h1>

			<ul>
				<CardList2 title={'Vale Coocerqui'} description={benefitOpt[0]} key={0} listItems={benefits1}></CardList2>
				<CardList2 title={'Vale Compras Assiduidade'} description={benefitOpt[1]} key={1}  listItems={benefits2} ></CardList2>
			</ul>
		</div>
	)
}