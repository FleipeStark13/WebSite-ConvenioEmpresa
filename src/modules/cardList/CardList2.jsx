import './cardList.css';
import iconNeg from './iconNeg.png';
import drogIconNeg from './iconNeg.png';
export default function CardList2 ({title, description, listItems}){
	return (
		<div className="cardLabel">
			<div className="card">
				<div className="header-card">
					<div className="head-card-flex">
						<div className="left-icon">
							<figure>
								<img src={iconNeg} alt="" />
							</figure>
						</div>
						<div className="right-icon">
							<figure>
								<img src={drogIconNeg} alt="" />
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

					<ul className='cardListed'>
						{
							listItems.map((item) => {
								return(
									<li>{item}</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</div>
	)

}