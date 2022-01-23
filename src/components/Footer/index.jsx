import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<span className="footer__title">OnReas </span>
				<span className="copyright">&copy; {new Date().getFullYear()} mstanka</span>
			</div>
		</footer>
	);
};

export default Footer;
