import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="nav">
			<Link to="/" className="nav__link">
				Domů
			</Link>{' '}
			|{' '}
			<Link to="/chci-nabidku" className="nav__link">
				Chci nabídku
			</Link>
		</nav>
	);
};

export default Navigation;
