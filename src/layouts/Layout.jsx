import "./Layout.css";
import React from "react";
import {Switch, Route} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/navbar/Navbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Footer from "../components/footer/Footer.jsx";

import NotFound from "../components/not_found/NotFound";

import Home from "../components/home/Home";
import Comment from "../containers/comment/Comment";
import Comments from "../containers/comments/Comments";
import Post from "../containers/post/Post";
import Posts from "../containers/posts/Posts";
import User from "../containers/user/User";
import Users from "../containers/users/Users";

const Layout = (props) => {
	return (
		<div className="layout">
			<Navbar page={window.location.pathname.replace(/^\/([^\/]+)(\/.*)?/, '$1')}/>
			<Container className="main-block">
				<Row sm={8}>
					<Col sm={8}>
						<Switch>
							<Route path={`${props.match.url}posts/:postId`} component={Post} />
							<Route path={`${props.match.url}users/:userId`} component={User} />
							<Route path={`${props.match.url}comments/:commentId`} component={Comment} />
							<Route exact path={`/`} component={Home} />
							<Route path={`${props.match.url}posts`} component={Posts} />
							<Route path={`${props.match.url}users`} component={Users} />
							<Route path={`${props.match.url}comments`} component={Comments} />
							<Route component={NotFound}/>
						</Switch>
					</Col>
					<Col sm={4}>
						<Sidebar />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
};

export default Layout;