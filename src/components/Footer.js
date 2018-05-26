import React, { Component } from 'react';
import { Container } from 'reactstrap';
import "../styles/footer.css";

export default class Header extends Component {
	render() {
		return (
			<div className="footer">
				<Container>
					<div className="footer-content">
						® Bancatrix 2018
					</div>
				</Container>
			</div>
		);
	}
}