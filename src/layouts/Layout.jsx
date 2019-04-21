import "./Layout.css";
import React, {Component} from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/noReduxComponents/navbar/Navbar.jsx";
import Sidebar from "../components/noReduxComponents/sidebar/Sidebar.jsx";
import Footer from "../components/noReduxComponents/footer/Footer.jsx";

export default class Layout extends Component {
	render () {
		return (
			<div className="layout">
				<Navbar />
				<Container className="main-block">
					<Row sm={8}>
						<Col sm={8}>
							{this.props.children}
						</Col>
						<Col sm={4}>
							<Sidebar />
						</Col>
					</Row>
				</Container>
			 	<Footer />
			</div>
		)
	}
}