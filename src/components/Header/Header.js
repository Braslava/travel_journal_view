import { GiEarthAfricaEurope } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import './Header.css';

function Header() {
	return (
		<div className="App">
			<header className="header">
				<IconContext.Provider
					value={{
						color: 'white',
						size: '2em',
						className: 'header__logo',
					}}
				>
					<div>
						<GiEarthAfricaEurope />
					</div>
				</IconContext.Provider>
				<p>My travel journal</p>
			</header>
		</div>
	);
}

export default Header;
