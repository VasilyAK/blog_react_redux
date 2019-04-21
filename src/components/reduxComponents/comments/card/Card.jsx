import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Card extends Component {
	render() {
		return (
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="card-title">
						<Link to={`/comments/${this.props.comment.id}`}>{this.props.comment.name}</Link>
					</h2>
					<p className="card-text">
						{this.props.comment.body}
					</p>
					<p>
						<a href="#">{this.props.comment.email}</a>
					</p>
				</div>
				<div className="card-footer text-muted">
					Posted on January 1, 2017 by post № <Link to={`/posts/${this.props.post.id}`}>{this.props.post.id}</Link>
				</div>
			</div>
		)
	}
}