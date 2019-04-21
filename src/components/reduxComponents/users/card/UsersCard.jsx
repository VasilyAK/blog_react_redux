import "./UsersCard.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {delUser} from "../../../../store/users/actions";


export default class UsersCard extends Component {
	constructor (props) {
		super(props);
		this.delUser = this.delUser.bind(this);
	}

	delUser () {
		this.props.dispatch(delUser(parseInt(this.props.id)));
	}

	render() {
		return (
			<Card className="mb-4">
				<Card.Header>
					<Container>
						<Row>
							<Col xs={8}>
								<Link
									to={`/users/${this.props.id}`}
								>{this.props.name}</Link>
							</Col>

							<Col xs={4} className="btn-del">
								<Button
									variant="primary"
									size="sm"
									onClick={this.delUser}
								>Delete</Button>
							</Col>
						</Row>
					</Container>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Address:<br />
							city {this.props.address.city}<br />
							street {this.props.address.street}<br />
							suite {this.props.address.suite}<br />
							zipcode {this.props.address.zipcode}
					</Card.Text>
					<Card.Text>
						Company:<br />
							bs: {this.props.company.bs}<br />
							catch phrase: {this.props.company.catchPhrase}<br />
							name: {this.props.company.name}<br />
					</Card.Text>
					<Card.Text>
						User:<br />
							username: {this.props.username}<br />
							phone: {this.props.phone}<br />
							website: {this.props.website}<br />
							email: {this.props.email}<br />
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}