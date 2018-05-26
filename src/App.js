import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
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
                            <Container>
                                <Row>
                                    <Col sm="3">
                                        <Nav vertical>
                                            <NavItem>
                                              <Link to="/">Home</Link>
                                            </NavItem>
                                            <NavItem>
                                              <Link to="/create-bank">Crea tu banquito</Link>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm="9">
                                        <Route exact path="/" component={Main} />
                                        <Route path="/create-bank" component={BankForm} />
                                    </Col>
                                </Row>
                            </Container>
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
