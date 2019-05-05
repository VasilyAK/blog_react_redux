import "./Posts.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import PostsCard from "./card/PostsCard";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import DataNotReceived from "../../components/data_not_received/DataNotReceived";
import ModalMessage from "../../components/modal_message/ModalMessage";

import {addPost, fetchPosts, resetAttentionPost} from "../../store/actions/posts_actions";
import {updatePagination, setPagination}  from "../../store/actions/pagination_actions";
import {fetchUsers} from "../../store/actions/users_actions";

class Posts extends Component {
	constructor (props) {
		super(props);
		this.addPost = this.addPost.bind(this);
		this.updatePagination = this.updatePagination.bind(this);
	}

	addPost () {
		this.props.dispatch(addPost({
			"userId": 1,
			"id": 101,
			"title": "new title",
			"body": "new body"
		}));
	}

	updatePagination() {
		const itemsLengtn = this.props.posts.length;
		const countOfItemsOnPage = 3;
		const countOfPaginationItems = 5;
		const active = this.props.pagination.active ? this.props.pagination.active : 1 ;

		this.props.dispatch(setPagination(
			'POSTS',
			itemsLengtn,
			countOfItemsOnPage,
			countOfPaginationItems,
			active
		))
	}

	render() {
		let postsBlock = null;

		if (this.props.posts.length && this.props.users.length && this.props.pagination !== null && !this.props.pagination.update) {
			let modalMessageBlock = null;
			if (this.props.attention !== null) {
				modalMessageBlock =
					<ModalMessage
						message={this.props.attention}
						dispatch={this.props.dispatch}
						action={resetAttentionPost}
					/>
				;
			}

			const posts = []; // определяем posts на странице
			const postsFrom = (this.props.pagination.active - 1) * this.props.pagination.counts.countOfItemsOnPage;
			const postsTo = this.props.pagination.active * this.props.pagination.counts.countOfItemsOnPage;
			for (let i = postsFrom; i < postsTo; i++) {
				if (this.props.posts[i]) {
					posts.push(this.props.posts[i]);
				}
			}

			postsBlock =
				<>
					{modalMessageBlock}
					<PageHeader
						title="Posts of users"
						btnTitle="Add new Post"
						btnHandler={this.addPost}
					/>
					{
						posts.map((post, index) => {
							const user = this.props.users.find((user) => user.id === post.userId);
							return <PostsCard
								key={index}
								post={post}
								user={user}
								pagination={this.props.pagination}
								dispatch={this.props.dispatch}
							/>
						})
					}
					<Pagination
						{...this.props.pagination}
						dispatch={this.props.dispatch}
						action={updatePagination}
						category="POSTS"
					/>
				</>
			;
		}

		if (this.props.fetchingPosts || this.props.fetchingUsers) {
			return <Loading />
		}	else {
			if (this.props.posts.length && this.props.users.length && this.props.pagination !== null) {
				return postsBlock
			} else {
				return <DataNotReceived
					dispatch={this.props.dispatch}
					action={fetchPosts}
				/>
			}
		}
	}


	componentDidMount () {
		if (!this.props.posts.length) {
			this.props.dispatch(fetchPosts());
		}
		if (!this.props.users.length) {
			this.props.dispatch(fetchUsers());
		}
		if (this.props.posts.length && this.props.users.length) {
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
		posts: state.posts.postsData,
		users: state.users.usersData,
		fetchingPosts: state.posts.fetching,
		fetchingUsers: state.users.fetching,
		errorPosts: state.posts.error,
		errorUsers: state.users.error,
		attention: state.posts.attention,
		pagination: state.posts.pagination
	};
}

export default connect(mapStateToProps)(Posts);