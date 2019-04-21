import "./Category.css";
import React from "react";
import {Link} from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Category = () => {
	return (
		<Card className="my-4">
			<Card.Header>Categories</Card.Header>
			<Card.Body>
				<Row>
					<Col lg={6}>
						<ul className="list-unstyled mb-0">
							<li>
								<Link to="#">Web Design</Link>
							</li>
							<li>
								<Link to="#">HTML</Link>
							</li>
							<li>
								<Link to="#">Freebies</Link>
							</li>
						</ul>
					</Col>
					<Col lg={6}>
						<ul className="list-unstyled mb-0">
							<li>
								<Link to="#">JavaScript</Link>
							</li>
							<li>
								<Link to="#">CSS</Link>
							</li>
							<li>
								<Link to="#">Tutorials</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
};

export default Category;