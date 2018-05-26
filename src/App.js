import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Bank, {BankList, BankForm} from './components/Bank';
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
                            <div class="nav-bar">
                                <Nav horizontal>
                                    <NavItem>
                                      <Link to="/">Home</Link>
                                    </NavItem>
                                    <NavItem>
                                      <Link to="/create-bank">Crea tu banquito</Link>
                                    </NavItem>
                                </Nav>
                            </div>
                            <Route exact path="/" component={Home} />
                            <Route path="/create-bank" component={BankForm} />
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
