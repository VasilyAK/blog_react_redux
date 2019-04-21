import "./Navbar.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default class NavbarPost extends Component {
	constructor (props) {
		super(props);

		this.state = {
			active: window.location.pathname.replace(/^\/([^\/]+)/, '$1')
		}
	}

	linkClick (active) {
		this.setState({	active})
	}

	render () {
		return (
			<Navbar variant="dark" bg="dark" expand="lg" fixed="top">
				<Container>

					<Navbar.Brand>
						<Link to="/home">React Post by VAK</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarResponsive">
						<span className="navbar-toggler-icon" />
					</Navbar.Toggle>

					<Navbar.Collapse id="navbarResponsive">
						<Nav as="ul" className="justify-content-end">

							<Nav.Item as="li" className={`nav-item ${this.state.active === '/' ? 'active': ''}`}>
								<Link to="/" className="nav-link" onClick={this.linkClick.bind(this, '/')}>
									Home
								</Link>
							</Nav.Item>

							<Nav.Item as="li" className={`nav-item ${this.state.active === 'posts' ? 'active': ''}`}>
								<Link to="/posts" className="nav-link" onClick={this.linkClick.bind(this, 'posts')}>
									Posts
								</Link>
							</Nav.Item>

							<Nav.Item as="li" className={`nav-item ${this.state.active === 'users' ? 'active': ''}`}>
								<Link to="/users" className="nav-link" onClick={this.linkClick.bind(this, 'users')}>
									Users
								</Link>
							</Nav.Item>

							<Nav.Item as="li"  className={`nav-item ${this.state.active === 'comments' ? 'active': ''}`}>
								<Link to="/comments" className="nav-link" onClick={this.linkClick.bind(this, 'comments')}>
									Comments
								</Link>
							</Nav.Item>

						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		)
	}
}