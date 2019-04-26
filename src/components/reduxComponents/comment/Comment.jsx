import "./Comment.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import PageHeader from "../../noReduxComponents/pageHeader/PageHeader.jsx";

export default class Card extends Component {
	constructor (props) {
		super(props);
		this.state = {
			comment: null,
			post: null
		};
	}

	render() {
		if  (this.state.comment !== null && this.state.post !== null) {
			return (
				<>
					<PageHeader>Comment № {this.props.params.commentId}</PageHeader>
					<div className="card mb-4">
						<div className="card-body">
							<h2 className="card-title">{this.state.comment.name}</h2>
							<p className="card-text">
								{this.state.comment.body}
							</p>
							<p>
								<a href="#">{this.state.comment.email}</a>
							</p>
						</div>
						<div className="card-footer text-muted">
							Posted on January 1, 2017 by post № <Link to={`/posts/${this.state.post.id}`}>{this.state.post.id}</Link>
						</div>
					</div>
				</>
			)
		} else {
			return null
		}
	}
}