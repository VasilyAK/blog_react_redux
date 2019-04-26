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
					<Col lg={6} className="pl-5">
						<ul className="list-unstyled mb-0">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/posts">Posts</Link>
							</li>
						</ul>
					</Col>
					<Col lg={6} className="pr-4">
						<ul className="list-unstyled mb-0">
							<li>
								<Link to="/users">Users</Link>
							</li>
							<li>
								<Link to="/comments">Comments</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
};

export default Category;