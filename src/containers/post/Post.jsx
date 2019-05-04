import "./Post.css";
import React, {Component} from "react";
import {connect} from "react-redux";

import PageHeader from "../../components/pageHeader/PageHeader";
import PostCard from "./card/PostCard";
import PostCardChange from "./card_change/PostCardChange";

import {fetchPost} from "../../store/actions/post_actions";
import {fetchUser} from "../../store/actions/user_actions";

class Post extends Component {
	constructor (props) {
		super(props);
		this.state = {
			changeCard: false,
			post: null,
			user: null
		};
		this.changePost = this.changePost.bind(this);
	}


	changePost () {
		this.setState({
			changeCard: !this.state.changeCard
		});
	}


	render() {
		let userCardBlock;
		let post = null;
		let user = null;

		if (this.props.post !== null) {
			post = this.props.post
		}
		if (this.state.post !== null) {
			post = this.state.post
		}

		if (this.props.user !== null) {
			user = this.props.user
		}
		if (this.state.user !== null) {
			user = this.state.user
		}

		if (post !== null && user !== null) {
			if (this.state.changeCard) {
				userCardBlock = <PostCardChange post={post} user={user} dispatch={this.props.dispatch}/>;
			} else {
				userCardBlock = <PostCard post={post} user={user} />;
			}
		}

		if  (post !==null && user !== null) {
			return (
				<>
					<PageHeader
						title={`Post № ${post.id}`}
						btnTitle="Change Post"
						btnHandler={this.changePost}
					/>
					{userCardBlock}
				</>
			)
		} else {
			return null
		}
	}


	componentDidMount() {
		if (!this.props.posts.length) {
			this.props.dispatch(fetchPost(parseInt(this.props.match.params.postId)));
		} else {
			this.setState({
				post: this.props.posts.find(post => {
					return post.id === parseInt(this.props.match.params.postId)
				})
			})
		}
	}


	componentDidUpdate () {
		// такая дурька нужна т.к. нет субд
		if (this.props.user === null && this.state.user === null) {
			let post = this.state.post;
			if (this.props.post !== null) {
				post = this.props.post
			}

			if (post !== null) {
				if (!this.props.users.length) {
					this.props.dispatch(fetchUser(parseInt(post.userId)));
				} else {
					this.setState({
						user: this.props.users.find(user => {
							return user.id === parseInt(post.userId)
						})
					})
				}
			}
		}
	}
}


function mapStateToProps(state) {
	return {
		posts: state.posts.postsData,
		post: state.post.postData,
		users: state.users.usersData,
		user: state.user.userData,
		fetching: state.post.fetching,
		error: state.post.error
	};
}

export default connect(mapStateToProps)(Post);