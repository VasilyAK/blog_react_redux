import "./PostsCard.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import Card from "react-bootstrap/Card";


export default class PostsCard extends Component {
	render() {
		return (
			<Card className="mb-4">
				<Card.Img variant="top" src="http://placehold.it/750x300" alt="Card image cap"/>
				<Card.Body>
					<Card.Title>{this.props.post.title}</Card.Title>
					<Card.Text>
						{this.props.post.body}
					</Card.Text>
					<Link to={`posts/${this.props.post.id}`} className="btn btn-primary">Read More &rarr;</Link>
				</Card.Body>
				<Card.Footer className="text-muted">
					Posted on January 1, 2017 by <Link to={`users/${this.props.user.id}`}>{this.props.user.name}</Link>
				</Card.Footer>
			</Card>
		)
	}
}