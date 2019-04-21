import "./ModalMessage.css";
import React, {Component} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {resetAttentionUser} from "../../../store/users/actions";

export default class ModalMessage extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: true,
		};
	}

	handleClose() {
		this.setState({ show: false });
		this.props.dispatch(resetAttentionUser())
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