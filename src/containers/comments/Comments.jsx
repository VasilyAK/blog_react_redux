import "./Comments.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import CommentsCard from "./card/CommentsCard";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import DataNotReceived from "../../components/data_not_received/DataNotReceived";
import ModalMessage from "../../components/modal_message/ModalMessage";

import {addComment, fetchComments, resetAttentionComment} from "../../store/actions/comments_actions";
import {updatePagination, setPagination}  from "../../store/actions/pagination_actions";
import {fetchPosts} from "../../store/actions/posts_actions";

class Comments extends Component {
	constructor (props) {
		super(props);
		this.addComment = this.addComment.bind(this);
		this.updatePagination = this.updatePagination.bind(this);
	}

	addComment () {
		this.props.dispatch(addComment({
			"postId": 1,
			"id": 501,
			"name": "new name",
			"email": "new email",
			"body": "new body"
		}));
	}

	updatePagination() {
		const itemsLengtn = this.props.comments.length;
		const countOfItemsOnPage = 3;
		const countOfPaginationItems = 5;
		const active = this.props.pagination.active ? this.props.pagination.active : 1 ;

		this.props.dispatch(setPagination(
			'COMMENTS',
			itemsLengtn,
			countOfItemsOnPage,
			countOfPaginationItems,
			active
		))
	}

	render() {
		let modalMessageBlock = null;
		if (this.props.attention !== null) {
			modalMessageBlock =
				<ModalMessage
					message={this.props.attention}
					dispatch={this.props.dispatch}
					action={resetAttentionComment}
				/>
			;
		}

		const comments = []; // определяем comments на странице
		if (this.props.pagination !== null && !this.props.pagination.update) {
			const commentsFrom = (this.props.pagination.active-1) * this.props.pagination.counts.countOfItemsOnPage;
			const commentsTo = this.props.pagination.active * this.props.pagination.counts.countOfItemsOnPage;
			for (let i = commentsFrom; i < commentsTo; i++){
				if (this.props.comments[i]) {
					comments.push(this.props.comments[i]);
				}
			}
		}

		const commentsBlock =
			<>
				{modalMessageBlock}
				<PageHeader
					title="Comments"
					btnTitle="Add new Comment"
					btnHandler={this.addComment}
				/>
				{
					comments.map((comment, index) => {
						const post = this.props.posts.find((post) => post.id === comment.postId);
						return <CommentsCard
							key={index}
							comment={comment}
							post={post}
							pagination={this.props.pagination}
							dispatch={this.props.dispatch}
						/>
					})
				}
				<Pagination
					{...this.props.pagination}
					dispatch={this.props.dispatch}
					action={updatePagination}
					category="COMMENTS"
				/>
			</>
		;


		if (this.props.fetchingComments || this.props.fetchingPosts) {
			return <Loading />
		}	else {
			if (this.props.comments.length && this.props.posts.length && this.props.pagination !== null) {
				return commentsBlock
			} else {
				return <DataNotReceived
					dispatch={this.props.dispatch}
					action={fetchComments}
				/>
			}
		}
	}


	componentDidMount () {
		if (!this.props.comments.length) {
			this.props.dispatch(fetchComments());
		}
		if (!this.props.posts.length) {
			this.props.dispatch(fetchPosts());
		}
		if (this.props.comments.length && this.props.posts.length) {
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
		comments: state.comments.commentsData,
		posts: state.posts.postsData,
		fetchingComments: state.comments.fetching,
		fetchingPosts: state.posts.fetching,
		errorComments: state.comments.error,
		errorPosts: state.posts.error,
		attention: state.comments.attention,
		pagination: state.comments.pagination
	};
}

export default connect(mapStateToProps)(Comments);