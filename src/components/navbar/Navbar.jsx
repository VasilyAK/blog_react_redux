import "./Navbar.css";
import React from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const NavbarBlog = (props) => {
	return (
		<Navbar variant="dark" bg="dark" expand="lg" fixed="top">
			<Container>

				<Navbar.Brand>
					<Link className="search__brand" to="/">React Post by VAK</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbarResponsive">
					<span className="navbar-toggler-icon" />
				</Navbar.Toggle>

				<Navbar.Collapse id="navbarResponsive">
					<Nav as="ul" className="justify-content-end">

						<Nav.Item as="li" className={`nav-item ${props.page === '/' ? 'active': ''}`}>
							<Link to="/" className="nav-link">
								Home
							</Link>
						</Nav.Item>

						<Nav.Item as="li" className={`nav-item ${props.page === 'posts' ? 'active': ''}`}>
							<Link to="/posts" className="nav-link">
								Posts
							</Link>
						</Nav.Item>

						<Nav.Item as="li" className={`nav-item ${props.page === 'users' ? 'active': ''}`}>
							<Link to="/users" className="nav-link">
								Users
							</Link>
						</Nav.Item>

						<Nav.Item as="li"  className={`nav-item ${props.page === 'comments' ? 'active': ''}`}>
							<Link to="/comments" className="nav-link">
								Comments
							</Link>
						</Nav.Item>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
};

export default NavbarBlog;