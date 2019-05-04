import "./UsersCard.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import UserCardInfo from "./userCardInfo/UserCardInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup"

import {delUser} from "../../../store/actions/users_actions";


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
					<ListGroup as={Container} variant="flush">

						<ListGroup.Item>
							<Row>
								<Col md={6}>
									<Row className="my-1">
										<Col className="users__info1-p-bold">Address:</Col>
									</Row>
									<UserCardInfo name={'city'} source={this.props.address.city}/>
									<UserCardInfo name={'street'} source={this.props.address.street}/>
								</Col>

								<Col md={6}>
									<UserCardInfo name={'phone'} source={this.props.phone}/>
									<UserCardInfo name={'website'} source={this.props.website}/>
									<UserCardInfo name={'email'} source={this.props.email}/>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Col md={6} className="px-0">
								<UserCardInfo name={'Company'} source={this.props.company.name}/>
							</Col>
						</ListGroup.Item>

					</ListGroup>
				</Card.Body>

			</Card>
		)
	}
}