import "./Users.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import UsersCard from "./card/UsersCard";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import DataNotReceived from "../../components/data_not_received/DataNotReceived";
import ModalMessage from "../../components/modal_message/ModalMessage";

import {addUser, fetchUsers, resetAttentionUser} from "../../store/actions/users_actions";
import {updatePagination, setPagination}  from "../../store/actions/pagination_actions";

class Users extends Component {
	constructor (props) {
		super(props);
		this.addUser = this.addUser.bind(this);
		this.updatePagination = this.updatePagination.bind(this);
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

	updatePagination() {
		const itemsLengtn = this.props.users.length;
		const countOfItemsOnPage = 3;
		const countOfPaginationItems = 5;
		const active = this.props.pagination.active ? this.props.pagination.active : 1 ;

		this.props.dispatch(setPagination(
			'USERS',
			itemsLengtn,
			countOfItemsOnPage,
			countOfPaginationItems,
			active
		))
	}

	render() {
		let usersBlock = null;

		if (this.props.users.length && this.props.pagination !== null && !this.props.pagination.update) {
			let modalMessageBlock = null;
			if (this.props.attention !== null) {
				modalMessageBlock =
					<ModalMessage
						message={this.props.attention}
						dispatch={this.props.dispatch}
						action={resetAttentionUser}
					/>
				;
			}

			const users = []; // определяем users на странице
			const usersFrom = (this.props.pagination.active - 1) * this.props.pagination.counts.countOfItemsOnPage;
			const usersTo = this.props.pagination.active * this.props.pagination.counts.countOfItemsOnPage;
			for (let i = usersFrom; i < usersTo; i++) {
				if (this.props.users[i]) {
					users.push(this.props.users[i]);
				}
			}

			usersBlock =
				<>
					{modalMessageBlock}
					<PageHeader
						title="Users"
						btnTitle="Add new User"
						btnHandler={this.addUser}
					/>
					{
						users.map((user, index) => {
							return <UsersCard
								key={index}
								{...user}
								pagination={this.props.pagination}
								dispatch={this.props.dispatch}
							/>
						})
					}
					<Pagination
						{...this.props.pagination}
						dispatch={this.props.dispatch}
						action={updatePagination}
						category="USERS"
					/>
				</>
			;
		}

		if (this.props.fetching) {
			return <Loading />
		}	else {
			if (this.props.users.length && this.props.pagination !== null) {
				return usersBlock
			} else {
				return <DataNotReceived
					dispatch={this.props.dispatch}
					action={fetchUsers}
				/>
			}
		}
	}


	componentDidMount () {
		if (!this.props.users.length) {
			this.props.dispatch(fetchUsers());
		} else {
			this.updatePagination()
		}
	}


	componentDidUpdate () {
		if (this.props.pagination !== null && this.props.pagination.update) {
			this.updatePagination()
		}
	}
}


function mapStateToProps(state) {
	return {
		users: state.users.usersData,
		fetching: state.users.fetching,
		error: state.users.error,
		attention: state.users.attention,
		pagination: state.users.pagination
	};
}

export default connect(mapStateToProps)(Users);