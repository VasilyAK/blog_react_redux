import "./UserCardInfo.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {changeUser} from "../../../../store/actions/user_actions";

const UserCardInfo = (props) => {

	const sourseHandler = event => {
		const sourceData = {
			id: props.id,
			path: props.path,
			data: event.target.value
		};
		props.dispatch(changeUser(sourceData));
	};

	return (
		<Form>
			<Form.Group as={Row} className="my-0 pr-5">
				<Col xs={4} md={3} className="lable_middle px-0">
					<Form.Label className="ml-4 mr-1 my-1">{props.name}:</Form.Label>
				</Col>
				<Col xs={8} md={9} className="my-0">
					<Form.Control
						as="input" size="sm"
						onChange={sourseHandler}
						value={props.source}
					/>
				</Col>
			</Form.Group>
		</Form>
	)
};

export default UserCardInfo;