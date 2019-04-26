import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Welcome from "./components/noReduxComponents/welcome/Welcome";
import Layout from "./layouts/Layout";

class App extends Component {
  render() {
    return (
      <Router>
				<Welcome />
				<Route path="/" component={Layout} />
      </Router>
    );
  }
}

export default App;