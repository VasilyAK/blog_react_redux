import "./Users.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../noReduxComponents/pageHeader/PageHeader";
import UsersCard from "./card/UsersCard";
import Pagination from "../pagination/Pagination";
import Loading from "../../noReduxComponents/loading/Loading";
import DataNotReceived from "../../noReduxComponents/data_not_received/DataNotReceived";
import ModalMessage from "../../noReduxComponents/modal_message/ModalMessage";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {addUser, fetchUsers} from "../../../store/users/actions";
import {updatePagination, setPagination}  from "../../../store/pagination/actions";

class Users extends Component {
	constructor (props) {
		super(props);
		this.addUser = this.addUser.bind(this);
	}


	addUser () {
		this.props.dispatch(addUser({
			"id": 11,
			"name": "New User",
			"username": "New User username",
			"email": "New User email",
			"address": {
				"street": "New User street",
				"suite": "New User suite",
				"city": "New User city",
				"zipcode": "New User zipcode",
				"geo": {
					"lat": "New User lat",
					"lng": "New User lng"
				}
			},
			"phone": "New User phone",
			"website": "New User website",
			"company": {
				"name": "New User name",
				"catchPhrase": "New User catchPhrase",
				"bs": "New User bs"
			}
		}));
	}


	render() {
		let modalMessageBlock = null;
		if (this.props.attention !== null) {
			modalMessageBlock =
				<ModalMessage
					message={this.props.attention}
					dispatch={this.props.dispatch}
				/>
			;
		}

		const users = []; // определяем users на странице
		if (this.props.pagination !== null) {
			const usersFrom = (this.props.pagination.active-1) * this.props.pagination.counts.countOfItemsOnPage;
			const usersTo = this.props.pagination.active * this.props.pagination.counts.countOfItemsOnPage;
			for (let i = usersFrom; i < usersTo; i++){
				if (this.props.users[i]) {
					users.push(this.props.users[i]);
				}
			}
		}

		const usersBlock =
			<>
				{modalMessageBlock}
				<PageHeader>
					<Container>
						<Row>
							<Col xs={6}>
								Users
							</Col>
							<Col xs={6} className="btn-add">
								<Button
									variant="primary"
									size="sm"
									onClick={this.addUser}
								>Add new User</Button>
							</Col>
						</Row>
					</Container>
				</PageHeader>
				{
					users.map((user, index) => {
						return <UsersCard
							key={index}
							{...user}
							usersLength={this.props.users.length}
							pagination={this.props.pagination}
							dispatch={this.props.dispatch}
						/>
					})
				}
				<Pagination	{...this.props.pagination}	dispatch={this.props.dispatch} />
			</>
		;

		if (this.props.fetching) {
			return <Loading />
		}	else {
			if (this.props.users.length && this.props.pagination !== null) {
				return usersBlock
			} else {
				return <DataNotReceived dispatch={this.props.dispatch} handler={fetchUsers}/>
			}
		}
	}


	componentDidMount () {
		if (!this.props.users.length) {
			this.props.dispatch(fetchUsers());
		}
	}


	componentDidUpdate () {
		const itemsLengtn = this.props.users.length;
		const countOfItemsOnPage = 3;
		const countOfPaginationItems = 5;
		const active = 1;

		if (this.props.pagination === null && this.props.users.length) {
			this.props.dispatch(setPagination(
				itemsLengtn,
				countOfItemsOnPage,
				countOfPaginationItems,
				active
			))
		}

		if (this.props.pagination !== null && this.props.pagination.update) {
			this.props.dispatch(setPagination(
				itemsLengtn,
				countOfItemsOnPage,
				countOfPaginationItems,
				this.props.pagination.active
			))
		}
	}
}


function mapStateToProps(state) {
	return {
		users: state.users.usersData,
		fetching: state.users.fetching,
		fetched: state.users.fetched,
		error: state.users.error,
		attention: state.users.attention,
		pagination: state.users.pagination
	};
}

export default connect(mapStateToProps)(Users);