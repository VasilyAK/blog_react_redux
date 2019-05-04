import "./CommentCardChange.css";
import React from "react";
import {Link} from "react-router-dom";

import CommentCardInfo from "./commentCardInfo/CommentCardInfo";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

const CommentCard = (props) => {
	let postBlock = <p>Unknown</p>;
	if (props.post){
		postBlock = <Link to={`/posts/${props.post.id}`}>post № {props.post.id}</Link>
	}

	return (
		<Card className="mb-4">
			<Card.Header>
				<CommentCardInfo id={props.comment.id}
					 source={props.comment.name}
					 path={['name']}
					 dispatch={props.dispatch}
					 type="input"
					 className="comment-card-info__name my-0 py-0"
				/>
			</Card.Header>
			<Card.Body>
				<CommentCardInfo id={props.comment.id}
					source={props.comment.body}
					path={['body']}
					dispatch={props.dispatch}
					type="textarea"
					className="comment-card-info__body"
				/>
				<Row>
					<Col xs={2} className="my-2 align-center">Email:</Col>
					<Col xs={10}>
						<CommentCardInfo id={props.comment.id}
							source={props.comment.email}
							path={['email']}
							dispatch={props.dispatch}
							type="input"
							className="comment-card-info__email my-2"
						/>
					</Col>
				</Row>
			</Card.Body>
			<Card.Footer className="text-muted">
				Commented on January 1, 2017 by {postBlock}
			</Card.Footer>
		</Card>
	)
};

export default CommentCard;