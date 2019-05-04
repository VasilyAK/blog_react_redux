import "./CommentCard.css";
import React from "react";
import {Link} from "react-router-dom";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentCard = (props) => {
	let postBlock = <p>Unknown</p>;
	if (props.post){
		postBlock = <Link to={`/posts/${props.post.id}`}>post № {props.post.id}</Link>
	}

	return (
		<Card className="mb-4">
			<Card.Header>
				{props.comment.name}
			</Card.Header>
			<Card.Body>
				<Card.Text>{props.comment.body}</Card.Text>
				<Card.Text as={Row}>
					<Col xs={2}>Email:</Col>
					<Col xs={10}>{props.comment.email}</Col>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				Commented on January 1, 2017 with {postBlock}
			</Card.Footer>
		</Card>
	)
};

export default CommentCard;