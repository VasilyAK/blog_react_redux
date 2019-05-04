import "./PageHeader.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PageHeader = (props) => {
	const pageHeaderWithButton =
		<Container className="my-4">
			<Row>
				<Col xs={7} sm={6} md={9}>
					<h2>{props.title}</h2>
				</Col>
				<Col xs={5} sm={6} md={3} className="align-items-start btn-add px-0">
					<Button
						variant="primary"
						size="sm"
						onClick={props.btnHandler}
					>{props.btnTitle}</Button>
				</Col>
			</Row>
		</Container>
	;

	const pageHeaderWithoutButton =
		<Container className="my-4">
			<Row>
				<Col xs={12}>
					<h2>{props.title}</h2>
				</Col>
			</Row>
		</Container>
	;

	if (props.btnHandler && props.btnTitle) {
		return pageHeaderWithButton
	} else {
		return pageHeaderWithoutButton
	}
};

export default PageHeader;