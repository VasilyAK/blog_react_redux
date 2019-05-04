import "./PostsCard.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import {delPost} from "../../../store/actions/posts_actions";


export default class PostsCard extends Component {
	constructor (props) {
		super(props);
		this.delPost = this.delPost.bind(this);
	}

	delPost () {
		this.props.dispatch(delPost(parseInt(this.props.post.id)));
	}

	render() {
		let userBlock = <p>Unknown</p>;
		if (this.props.user){
			userBlock = <Link to={`users/${this.props.user.id}`}>{this.props.user.name}</Link>
		}

		return (
			<Card className="mb-4">
				<Card.Header>
					<Container>
						<Row>
							<Col xs={{span:4, offset: 8}} className="btn-del">
								<Button
									variant="primary"
									size="sm"
									onClick={this.delPost}
								>Delete</Button>
							</Col>
						</Row>
					</Container>
				</Card.Header>
				<Card.Img variant="top" src="http://placehold.it/750x300" alt="Card image cap"/>
				<Card.Body>
					<Card.Title>{this.props.post.title}</Card.Title>
					<Card.Text>{this.props.post.body}</Card.Text>
					<Link to={`posts/${this.props.post.id}`} className="btn btn-primary">Read More &rarr;</Link>
				</Card.Body>
				<Card.Footer className="text-muted">
					Posted on January 1, 2017 by {userBlock}
				</Card.Footer>
			</Card>
		)
	}
}