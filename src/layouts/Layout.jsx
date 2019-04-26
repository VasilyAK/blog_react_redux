import "./Layout.css";
import React from "react";
import {Switch, Route} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/noReduxComponents/navbar/Navbar.jsx";
import Sidebar from "../components/noReduxComponents/sidebar/Sidebar.jsx";
import Footer from "../components/noReduxComponents/footer/Footer.jsx";

import NotFound from "../components/noReduxComponents/not_found/NotFound";

import Home from "../components/noReduxComponents/home/Home";
import Comment from "../components/reduxComponents/comment/Comment";
import Comments from "../components/reduxComponents/comments/Comments";
import Post from "../components/reduxComponents/post/Post";
import Posts from "../components/reduxComponents/posts/Posts";
import User from "../components/reduxComponents/user/User";
import Users from "../components/reduxComponents/users/Users";

const Layout = (props) => {
	return (
		<div className="layout">
			<Navbar page={window.location.pathname.replace(/^\/([^\/]+)/, '$1')}/>
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