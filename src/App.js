import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Bank, {BankList, BankForm} from './components/Bank';
import Account from './components/Account';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from 'reactstrap';

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
                            <Route exact path="/banqatrix" component={Home} />
                            <Route exact path="/banqatrix/create-bank" component={BankForm} />
                            <Route exact path="/banqatrix/account" component={Account} />
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
