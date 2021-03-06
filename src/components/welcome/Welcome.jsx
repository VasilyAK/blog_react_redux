import "./Welcome.css";
import React, {Component} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Welcome extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: true,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	render () {
		return (
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Welcome!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Welcome to our site, made by VAK</p>
				</Modal.Body>

				<Modal.Footer>
					<Button
						variant="primary"
						onClick={this.handleClose}
					>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}