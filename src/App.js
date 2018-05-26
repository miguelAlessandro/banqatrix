import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Bank from './components/Bank';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App Site">
					<div className="Site-content">
						<div className="App-header">
							<Header />
						</div>
						<div className="main">
							  <ul>
								<li>
								  <Link to="/">Home</Link>
								</li>
								<li>
								  <Link to="/bank">Bank</Link>
								</li>
							  </ul>
						</div>
						<Route exact path="/" component={Main} />
						<Route path="/bank" component={Bank} />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
