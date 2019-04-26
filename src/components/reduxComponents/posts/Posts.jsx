import "./Posts.css";
import React, {Component} from "react";

import PageHeader from "../../noReduxComponents/pageHeader/PageHeader";
import Card from "./card/PostsCard";
import Pagination from "../pagination/Pagination";

export default class Posts extends Component {
	constructor (props) {
		super(props);
		this.state = {
			posts: [{
				id: 3,
				title: 'title',
				body: 'body',
				userId: 5
			}],
			users: [{
				id: 5,
				name: 'name'
			}]
		};
	}

	render() {
		const postsBlock =
			<>
				<PageHeader>
					Posts <small>of users</small>
				</PageHeader>	{
					this.state.posts.map((post, index) => {
						const user = this.state.users.find(user => post["userId"] === user["id"]);
						return <Card key={index} post={post} user={user}/>;
					})
				}
				<Pagination />
			</>
		;

		if (this.state.posts.length > 0 && this.state.users.length > 0) {
			return postsBlock
		} else {
			return null
		}
	}
}