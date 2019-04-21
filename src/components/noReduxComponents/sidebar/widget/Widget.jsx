import "./Widget.css";
import React from "react";
import Card from "react-bootstrap/Card";

const Widget = () => {
	return (
		<Card className="my-4">
			<Card.Header>Side Widget</Card.Header>
			<Card.Body>
				<Card.Text>
				You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
				</Card.Text>
			</Card.Body>
		</Card>
	)
};

export default Widget;