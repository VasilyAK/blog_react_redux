import React, {Component} from "react";
import PageHeader from "../../noReduxComponents/pageHeader/PageHeader";
import Card from "./card/Card.jsx";
import Pagination from "../pagination/Pagination.jsx";

export default class Comments extends Component {
	constructor (props) {
		super(props);
		this.state = {
			comments: [],
			posts: []
		};
	}

	render() {
		const commentsBlock =
			<>
				<PageHeader>
					Comments <small>by posts</small>
				</PageHeader>
				{
					// не делаю переход по страницам, т.к. прийдется передавать значения от дочерних к родительским
					// компонентам, думаю проще будет это организовать через Redux в последующем
					this.state.comments.map((comment, index) => {
						let result;
						this.state.posts.forEach(post => {
							if (comment["postId"] === post["id"]) {
								result = <Card key={index} comment={comment} post={post}/>
							}
						});
						return result;
					})
				}
				<Pagination />
			</>
		;

		if (this.props.params.commentId) {
			return (
				<>
					{this.props.children}
				</>
			)
		} else {
			if (this.state.comments.length > 0 && this.state.posts.length > 0) {
				return commentsBlock
			} else {
				return null
			}
		}
	}
}