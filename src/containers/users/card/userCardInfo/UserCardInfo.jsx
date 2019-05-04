import "./UserCardInfo.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserCardInfo = (props) => {
	return (
		<Row className="my-1 ml-2">
			<Col xs={4} md={12} lg={4} xl={3} className="users-card-info_italic px-0">{props.name}:</Col>
			<Col xs={8} md={12} lg={8} xl={9} className="users-card-info__table-td_nowrap pl-2">{props.source}</Col>
		</Row>
	)
};

export default UserCardInfo;