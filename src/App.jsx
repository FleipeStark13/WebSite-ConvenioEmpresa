import HeroBanner from './modules/HeroBanner';
import BenefitsList from './modules/BenefitsList';
import HowWorks from './modules/HowWoks/HowWorks';
import './App.css';

function App() {
  return (
	  <div className="App">
		<section>
			<HeroBanner></HeroBanner>
		</section>
		<section>
			<BenefitsList></BenefitsList>
		</section>
		<section>
			<HowWorks></HowWorks>
		</section>
	  </div>
  );
}

export default App;
