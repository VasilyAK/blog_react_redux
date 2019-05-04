import "./Comment.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import CommentCard from "./card/CommentCard";
import CommentCardChange from "./card_change/CommentCardChange";

import {fetchComment} from "../../store/actions/comment_actions";
import {fetchPost} from "../../store/actions/post_actions";

class Comment extends Component {
	constructor (props) {
		super(props);
		this.state = {
			changeCard: false,
			comment: null,
			post: null
		};
		this.changeComment = this.changeComment.bind(this);
	}


	changeComment () {
		this.setState({
			changeCard: !this.state.changeCard
		});
	}


	render() {
		let postCardBlock;
		let comment = null;
		let post = null;

		if (this.props.comment !== null) {
			comment = this.props.comment
		}
		if (this.state.comment !== null) {
			comment = this.state.comment
		}

		if (this.props.post !== null) {
			post = this.props.post
		}
		if (this.state.post !== null) {
			post = this.state.post
		}

		if (comment !== null && post !== null) {
			if (this.state.changeCard) {
				postCardBlock = <CommentCardChange comment={comment} post={post} dispatch={this.props.dispatch}/>;
			} else {
				postCardBlock = <CommentCard comment={comment} post={post} />;
			}
		}

		if  (comment !==null && post !== null) {
			return (
				<>
					<PageHeader
						title={`Comment № ${comment.id}`}
						btnTitle="Change Comment"
						btnHandler={this.changeComment}
					/>
					{postCardBlock}
				</>
			)
		} else {
			return null
		}
	}


	componentDidMount() {
		if (!this.props.comments.length) {
			this.props.dispatch(fetchComment(parseInt(this.props.match.params.commentId)));
		} else {
			this.setState({
				comment: this.props.comments.find(comment => {
					return comment.id === parseInt(this.props.match.params.commentId)
				})
			})
		}
	}


	componentDidUpdate () {
		// такая дурька нужна т.к. нет субд
		if (this.props.post === null && this.state.post === null) {
			let comment = this.state.comment;
			if (this.props.comment !== null) {
				comment = this.props.comment
			}

			if (comment !== null) {
				if (!this.props.posts.length) {
					this.props.dispatch(fetchPost(parseInt(comment.postId)));
				} else {
					this.setState({
						post: this.props.posts.find(post => {
							return post.id === parseInt(comment.postId)
						})
					})
				}
			}
		}
	}
}


function mapStateToProps(state) {
	return {
		comments: state.comments.commentsData,
		comment: state.comment.commentData,
		posts: state.posts.postsData,
		post: state.post.postData,
		fetching: state.comment.fetching,
		error: state.comment.error
	};
}

export default connect(mapStateToProps)(Comment);