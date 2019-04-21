import React, {Component} from "react";

import Pagination from "react-bootstrap/Pagination";

import {updatePagination} from "../../../store/pagination/actions";

export default class PagePagination extends Component {
	constructor (props) {
		super (props);
		this.paginationHandler = this.paginationHandler.bind(this);
	}

	paginationHandler (event) {
		this.props.dispatch(updatePagination({
			active: parseInt(event.target.text),
			counts: this.props.counts
		}))
	}

	render () {
		let items = [];
		for (let i = this.props.from; i <= this.props.to; i++) {
			items.push(
				<Pagination.Item
					key={i}
					active={i === this.props.active}
					onClick={this.paginationHandler}
				>
					{i}
				</Pagination.Item>,
			);
		}

		const paginationBasic =
			<div>
				<Pagination>{items}</Pagination>
			</div>
		;

		return (
			paginationBasic
		)
	}
}