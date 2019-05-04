import "./CommentCardInfo.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {changeComment} from "../../../../store/actions/comment_actions";

const CommentCardInfo = (props) => {

	const sourseHandler = event => {
		const sourceData = {
			id: props.id,
			path: props.path,
			data: event.target.value
		};
		props.dispatch(changeComment(sourceData));
	};

	return (
		<Form>
			<Form.Group as={Row} className="my-0">
				<Col className="my-0">
					<Form.Control as={props.type} className={props.className}
						size="sm" rows={5}
						onChange={sourseHandler}
						value={props.source}
					/>
				</Col>
			</Form.Group>
		</Form>
	)
};

export default CommentCardInfo;