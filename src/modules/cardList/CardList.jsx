import iconNeg from './iconNeg.png';
import drogIconNeg from './iconNeg.png';
import './cardList.css'
export default function CardList ({title, description, firstIcon, secondIcon}){
	return (
		<div className="cardLabel">
			<div className="card">
				<div className="header-card">
					<div className="head-card-flex">
						<div className="left-icon">
							<figure>
								<img src={firstIcon} alt="" />
							</figure>
						</div>
						<div className="right-icon">
							<figure>
								<img src={secondIcon} alt="" />
							</figure>
						</div>
					</div>
				</div>
				<div className="body-card">
					<h1>
						{title}
					</h1>
					<p>
						{description}
					</p>
				</div>
			</div>
		</div>
	)

}

