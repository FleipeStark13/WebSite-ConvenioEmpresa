import logo from './logo.png';
export default function Header() {
	return (
		<header>
			<nav>
				<figure><img src={logo} /></figure>
			
				<ul>
					<li>
						<a href="#">Link</a>
					</li>
					
					<li>
						<a href="#">Link</a>
					</li>
					
					<li>
						<a href="#">Link</a>
					</li>
					
					<li>
						<a href="#">Link</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
