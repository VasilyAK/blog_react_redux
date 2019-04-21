import React, {Component} from "react";
import {Link} from "react-router-dom";
import PageHeader from "../../noReduxComponents/pageHeader/PageHeader";

export default class Card extends Component {
	constructor (props) {
		super(props);
		this.state = {
			post: null,
			user: null
		};
	}

	render() {
		const postBlock =
			<>
				<PageHeader>Post № {this.props.match.params.postId}</PageHeader>
				<div className="card mb-4">
					<img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
					<div className="card-body">
						<h2 className="card-title">{this.state.post.title}</h2>
						<p className="card-text">
							{this.state.post.body}
						</p>
					</div>
					<div className="card-footer text-muted">
						Posted on January 1, 2017 by <Link to={`users/${this.state.user.id}`}>{this.state.user.name}</Link>
					</div>
				</div>
			</>
		;

		if  (this.state.post !==null && this.state.user !== null) {
			return postBlock
		} else {
			return null
		}
	}
}