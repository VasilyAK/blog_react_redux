import "./User.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import UserCard from "../user/card/UserCard";
import UserCardChange from "../user/card_change/UserCardChange";
import Loading from "../../components/loading/Loading";
import DataNotReceived from "../../components/data_not_received/DataNotReceived";

import {fetchUser} from "../../store/actions/user_actions";

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
				<PageHeader
					title="Personal Information"
					btnTitle="Change User"
					btnHandler={this.changeUser}
				/>
				{userCardBlock}
			</>
		;

		if (this.props.fetching) {
			return <Loading />
		} else {
			if (data !== null) {
				return userBLock;
			} else {
				return <DataNotReceived
					dispatch={this.props.dispatch}
					handler={fetchUser}
					params={parseInt(this.props.match.params.userId)}
				/>
			}
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
		error: state.user.error
	};
}

export default connect(mapStateToProps)(User);