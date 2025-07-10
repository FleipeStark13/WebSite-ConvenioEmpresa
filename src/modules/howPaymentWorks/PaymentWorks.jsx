import { AiOutlineCalendar, AiFillCreditCard, AiFillCheckSquare, AiOutlineArrowRight } from "react-icons/ai"
import './payment.css';
import paymentImg from './18770.jpg'
export default function PaymentWorks () {
	return (
		<div className="paymentWorks">
			<div className="flexPayment">
				<div className="splitter">
					<h1>Como funciona<br />o pagamento?</h1>
					<p>A empresa paga via boleto bancário o valor utilizado pelo colaborador no período estabelecido.</p>

					<div className="iconslist">
						<AiFillCreditCard></AiFillCreditCard>
						<AiOutlineArrowRight className="whiteIcon"></AiOutlineArrowRight>
						<AiOutlineCalendar></AiOutlineCalendar>
						<AiOutlineArrowRight className="whiteIcon"></AiOutlineArrowRight>
						<AiFillCheckSquare></AiFillCheckSquare>
					</div>
				</div>

				<div className="splitter">
					<figure>
						<img src={paymentImg} alt="" />
					</figure>
				</div>

			</div>
		</div>
	)
}