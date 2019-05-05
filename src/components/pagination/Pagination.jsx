import React, {Component} from "react";

import Pagination from "react-bootstrap/Pagination";


export default class PagePagination extends Component {
	constructor (props) {
		super (props);
		this.paginationHandler = this.paginationHandler.bind(this);
		this.paginationHandlerFirst = this.paginationHandlerFirst.bind(this);
		this.paginationHandlerLast = this.paginationHandlerLast.bind(this);
		this.paginationHandlerNext = this.paginationHandlerNext.bind(this);
		this.paginationHandlerPrev = this.paginationHandlerPrev.bind(this);
	}

	paginationHandler (event) {
		window.scrollTo(0, 0);
		this.props.dispatch(this.props.action({
			category: this.props.category,
			active: parseInt(event.target.text),
			counts: this.props.counts
		}))
	}

	paginationHandlerFirst (event) {
		window.scrollTo(0, 0);
		this.props.dispatch(this.props.action({
			category: this.props.category,
			active: 1,
			counts: this.props.counts
		}))
	}

	paginationHandlerPrev (event) {
		window.scrollTo(0, 0);
		this.props.dispatch(this.props.action({
			category: this.props.category,
			active: this.props.active - 1,
			counts: this.props.counts
		}))
	}

	paginationHandlerNext (event) {
		window.scrollTo(0, 0);
		this.props.dispatch(this.props.action({
			category: this.props.category,
			active: this.props.active + 1,
			counts: this.props.counts
		}))
	}

	paginationHandlerLast (event) {
		window.scrollTo(0, 0);
		this.props.dispatch(this.props.action({
			category: this.props.category,
			active: this.props.counts.countOfPages,
			counts: this.props.counts
		}))
	}

	render () {
		let items = [];
		items.push(
			<Pagination.First
				key="first"
				onClick={this.paginationHandlerFirst}
				disabled={1 === this.props.active}
			>
				First
			</Pagination.First>,
		);

		items.push(
			<Pagination.Prev
				key="prev"
				onClick={this.paginationHandlerPrev}
				disabled={1 === this.props.active}
			/>
		);

		for (let i = this.props.from; i <= this.props.to; i++) {
			items.push(
				<Pagination.Item
					key={i}
					active={i === this.props.active}
					onClick={this.paginationHandler}
				>
					{i}
				</Pagination.Item>
			);
		}

		items.push(
			<Pagination.Next
				key="next"
				onClick={this.paginationHandlerNext}
				disabled={this.props.counts.countOfPages === this.props.active}
			/>
		);

		items.push(
			<Pagination.Last
				key="last"
				onClick={this.paginationHandlerLast}
				disabled={this.props.counts.countOfPages === this.props.active}
			>
				Last
			</Pagination.Last>
		);

		return (
			<Pagination className="justify-content-center">
			{items}
			</Pagination>
		)
	}
}