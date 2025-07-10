import Header from './modules/Header/Header';
import HeroBanner from './modules/Hero/HeroBanner';
import BenefitsList from './modules/Benefits/BenefitsList';
import HowWorks from './modules/HowWoks/HowWorks';
import PaymentWorks from './modules/howPaymentWorks/PaymentWorks';
import GestaoColab from './modules/gestaoColaboradores/GestaoColab';
import Convenio from './modules/Convenio/Convenio';
import OptionsBenefits from './modules/optionsBenefits/OptionsBenefits';
import Cta from './modules/cta/Cta';
import BackToTop from './modules/_handlers/BackToTop';
import './App.css';

function App() {
  return (
	  <div className="App">
		<Header></Header>
		<BackToTop></BackToTop>
		<main>
			<section>
				<HeroBanner></HeroBanner>
			</section>
			<section className='whited_bg' >
				<BenefitsList></BenefitsList>
			</section>
			<section id='howWorks' className='whited_bg'>
				<HowWorks></HowWorks>
			</section>
			<section id='payment' className='whited_bg'>
				<PaymentWorks></PaymentWorks>
			</section>
			<section>
				<GestaoColab></GestaoColab>
			</section>
			<section id='convenio' className='whited_bg'>
				<Convenio></Convenio>
			</section>
			<section className='whited_bg'>
				<OptionsBenefits></OptionsBenefits>
			</section>
			<section id='cta' className='whited_bg'>
				<Cta></Cta>
			</section>
		</main>
	  </div>
  );
}

export default App;
