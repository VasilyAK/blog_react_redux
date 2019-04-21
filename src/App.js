import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Welcome from "./components/noReduxComponents/welcome/Welcome";
import Layout from "./layouts/Layout";
import NotFound from "./components/noReduxComponents/not_found/NotFound";

import Home from "./components/noReduxComponents/home/Home";
import Posts from "./components/reduxComponents/posts/Posts";
import Users from "./components/reduxComponents/users/Users";
import Comments from "./components/reduxComponents/comments/Comments";

import Post from "./components/reduxComponents/post/Post";
import User from "./components/reduxComponents/user/User";
import Comment from "./components/reduxComponents/comment/Comment";

class App extends Component {
  render() {
    return (
      <Router>
				<Welcome />
				<Layout>
					<Switch>
						<Route path={`/posts/:postId`} component={Post} />
						<Route path={`/users/:userId`} component={User} />
						<Route path={`/comments/:commentId`} component={Comment} />
						<Route exact path={`/`} component={Home} />
						<Route path={`/posts`} component={Posts} />
						<Route path={`/users`} component={Users} />
						<Route path={`/comments`} component={Comments} />
						<Route component={NotFound}/>
					</Switch>
				</Layout>
      </Router>
    );
  }
}

export default App;