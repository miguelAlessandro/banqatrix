import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem, Container } from 'reactstrap';
import FaDiamond from 'react-icons/lib/fa/diamond';
import '../styles/header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Bank, {BankList, BankForm} from '../components/Bank';

export default class Header extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<Container>
						<NavbarBrand className="main-icon">
							<span className="main-icon-logo">
								<FaDiamond/>
							</span>
							<span className="main-icon-text">
								Bancatrix
							</span>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem className="nav-link">
									<Link to="/banqatrix">Home</Link>
								</NavItem>
								<NavItem className="nav-link">
									<Link to="/banqatrix/create-bank">Crea tu banquito</Link>
								</NavItem>
								<NavItem className="nav-link">
									<Link to="/banqatrix/account">Mi Cuenta</Link>
								</NavItem>								
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
