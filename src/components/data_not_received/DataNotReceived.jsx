import "./DataNotReceived.css";
import React, {Component} from "react";

import Button from "react-bootstrap//Button";


export default class DataNotReceived extends Component {
	constructor (props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler () {
		let params = [];

		if (this.props.params) {
			if (this.props.params instanceof Array) {
				params = this.props.params
			} else {
				params = [this.props.params]
			}
		}

		try {
			if(typeof this.props.dispatch === 'function'){
				if(typeof this.props.action === 'function'){
					this.props.dispatch(this.props.action(...params))
				} else {
					console.error("handler must be a function")
				}
			} else {
				console.error("dispatch must be a function")
			}
		} catch (e) {
			console.error(e.message);
		}
	}

	render () {
		return (
			<>
				<p className="my-3">
					Page can not be displayed!<br />
					Data not received
				</p>
				<div className={`data-not-received__back`}>
					<p className="my-0 mr-3">Try it again?</p>
					<Button
						size="sm"
						onClick={this.onClickHandler}
					>Ok</Button>
				</div>
			</>
		)
	}
}