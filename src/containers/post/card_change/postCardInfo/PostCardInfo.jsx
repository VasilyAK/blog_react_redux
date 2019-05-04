import "./PostCardInfo.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {changePost} from "../../../../store/actions/post_actions";

const PostCardInfo = (props) => {

	const sourseHandler = event => {
		const sourceData = {
			id: props.id,
			path: props.path,
			data: event.target.value
		};
		props.dispatch(changePost(sourceData));
	};

	return (
		<Form>
			<Form.Group as={Row} className="my-0">
				<Col className="my-0">
					<Form.Control as={props.type} className={`my-2 ${props.className}`}
						size="sm" rows={5}
						onChange={sourseHandler}
						value={props.source}
					/>
				</Col>
			</Form.Group>
		</Form>
	)
};

export default PostCardInfo;