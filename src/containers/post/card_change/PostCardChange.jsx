import "./PostCardChange.css";
import React from "react";
import {Link} from "react-router-dom";

import PostCardInfo from "./postCardInfo/PostCardInfo";

import Card from "react-bootstrap/Card";

const PostCard = (props) => {
	let userBlock = <p>Unknown</p>;
	if (props.user){
		userBlock = <Link to={`users/${props.user.id}`}>{props.user.name}</Link>
	}

	return (
		<Card className="mb-4">
			<Card.Img variant="top" src="http://placehold.it/750x300" alt="Card image cap"/>
			<Card.Body>
				<PostCardInfo id={props.post.id}
					source={props.post.title}
					path={['title']}
					dispatch={props.dispatch}
					type="input"
					className="post-card-info__title"
				/>
				<PostCardInfo id={props.post.id}
					source={props.post.body}
					path={['body']}
					dispatch={props.dispatch}
					type="textarea"
					className="post-card-info__body"
				/>
			</Card.Body>
			<Card.Footer className="text-muted">
				Posted on January 1, 2017 by {userBlock}
			</Card.Footer>
		</Card>
	)
};

export default PostCard;