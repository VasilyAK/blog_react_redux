import "./CommentsCard.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import {delComment} from "../../../store/actions/comments_actions";


export default class CommentsCard extends Component {
	constructor (props) {
		super(props);
		this.delComment = this.delComment.bind(this);
	}

	delComment () {
		this.props.dispatch(delComment(parseInt(this.props.comment.id)));
	}

	render() {
		let postBlock = <p>Unknown</p>;
		if (this.props.post){
			postBlock = <Link to={`posts/${this.props.post.id}`}>post № {this.props.post.id}</Link>
		}

		return (
			<Card className="mb-4">
				<Card.Header>
					<Container>
						<Row>
							<Col xs={8}>
								<Link to={`comments/${this.props.comment.id}`}>{this.props.comment.name}</Link>
							</Col>
							<Col xs={4} className="btn-del">
								<Button
									variant="primary"
									size="sm"
									onClick={this.delComment}
								>Delete</Button>
							</Col>
						</Row>
					</Container>
				</Card.Header>
				<Card.Body>
					<Card.Text>{this.props.comment.body}</Card.Text>
					<Card.Text>Email: {this.props.comment.email}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					Commented on January 1, 2017 with {postBlock}
				</Card.Footer>
			</Card>
		)
	}
}