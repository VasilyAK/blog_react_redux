import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
	return (
		<footer className="py-5 bg-dark pos">
			<Container>
				<p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
			</Container>
		</footer>
	)
};

export default Footer;