import "./UserCardInfo.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserCardInfo = (props) => {
	return (
		<Row>
			<Col xs={4} md={3} className="px-0">
				<p className="ml-4 mr-1 my-1">{props.name}:</p>
			</Col>
			<Col xs={8} md={9}>
				<p className="px-0 my-1">{props.source}</p>
			</Col>
		</Row>
	)
};

export default UserCardInfo;