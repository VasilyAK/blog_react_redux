import "./ModalMessage.css";
import React, {Component} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default class ModalMessage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {show: true};

		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.setState({ show: false });
		this.props.dispatch(this.props.action())
	}

	render () {
		return (
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.message.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{this.props.message.body}
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