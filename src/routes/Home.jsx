import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<>
			<Navigation />
			<div className="wrapper">
				<section className="home">
					<div className="home__text">
						Vlasníte nemovitost a rádi byste ji pronajali nebo prodali? Vyplňte formulář a do 48 hodin vám pošleme nabídku.
					</div>
					<Link to="/chci-nabidku" className="home__link">
						{' '}
						Vyplnit formulář <span className="home__arrow">⟶</span>
					</Link>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Home;
