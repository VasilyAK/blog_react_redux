import "./PostCard.css";
import React from "react";
import {Link} from "react-router-dom";

import Card from "react-bootstrap/Card";

const PostCard = (props) => {
	let userBlock = <p>Unknown</p>;
	if (props.user){
		userBlock = <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
	}

	return (
		<Card className="mb-4">
			<Card.Img variant="top" src="http://placehold.it/750x300" alt="Card image cap"/>
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text>{props.post.body}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				Posted on January 1, 2017 by {userBlock}
			</Card.Footer>
		</Card>
	)
};

export default PostCard;