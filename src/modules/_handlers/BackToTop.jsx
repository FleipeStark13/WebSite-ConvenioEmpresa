import { BsArrowUp } from "react-icons/bs"
import './backToTop.css'
export default function BackToTop () {
	
	function back_to_top() {
		window.scroll(0, 0);
	}
	
	return (
		<div onClick={back_to_top} className="backToTop">
			<BsArrowUp></BsArrowUp>
		</div>
	)
}