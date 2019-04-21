import "./User.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../noReduxComponents/pageHeader/PageHeader";
import DataNotReceived from "../../noReduxComponents/data_not_received/DataNotReceived";
import UserCard from "../user/card/UserCard";
import UserCardChange from "../user/card_change/UserCardChange";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {fetchUser} from "../../../store/user/actions";

class User extends Component {
	constructor (props) {
		super(props);
		this.state = {
			changeCard: false,
			user: null
		};
		this.changeUser = this.changeUser.bind(this);
	}

	changeUser () {
		this.setState({
			changeCard: !this.state.changeCard
		});
	}

	render() {
		let userCardBlock;
		let data = null;

		if (this.props.user !== null) {
			data = this.props.user
		}
		if (this.state.user !== null) {
			data = this.state.user
		}

		if (data !== null) {
			if (this.state.changeCard) {
				userCardBlock = <UserCardChange {...data} dispatch={this.props.dispatch}/>;
			} else {
				userCardBlock = <UserCard {...data} />;
			}
		}

		const userBLock =
			<>
				<PageHeader>
					<Container>
						<Row>
							<Col xs={7} sm={6} md={9}>
								Personal Information
							</Col>
							<Col xs={5} sm={6} md={3} className="align-items-start btn-add px-0">
								<Button
									variant="primary"
									size="sm"
									onClick={this.changeUser}
								>Change User</Button>
							</Col>
						</Row>
					</Container>
				</PageHeader>
				{userCardBlock}
			</>
		;

		if (data !== null) {
				return userBLock;
			} else {
				return <DataNotReceived/>
			}
		}

	componentDidMount() {
		if (!this.props.users.length) {
			this.props.dispatch(fetchUser(parseInt(this.props.match.params.userId)));
		} else {
			this.setState({
				user: this.props.users.find(user => {
					return user.id === parseInt(this.props.match.params.userId)
				})
			})
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.user.userData,
		users: state.users.usersData,
		fetching: state.user.fetching,
		fetched: state.user.fetched,
		error: state.user.error,
		attention: state.user.attention
	};
}

export default connect(mapStateToProps)(User);