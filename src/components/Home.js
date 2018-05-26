import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import '../styles/home.css';
import { Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Main extends Component {
	render() {
		return (
			<div>
				<div className="section-1 background-main-img">
					<Container>
						<div className="text-center white-text text-section">
							<div className="main-text">Porque unidos ahorramos mejor</div>
							<div className="submain-text">Tus ahorros de grupales de siempre de manera digital y segura</div>
							<div className="main-btn">
								<a className="btn btn-primary" href="/create-bank">
									Crear banquito
								</a>
							</div>
						</div>
					</Container>
				</div>
				<section className="section-2">
					<div className="container-fluid">
						<Row className="text-center">
							<Col xs="12" md="4" className="box-1">
								<div className="box-title">
									Conéctate
								</div>
								<hr/>
								<div className="box-body">
									Júntate con tus amigos, familiares o encuentra nuevas personas de confianza, crea tu banquito y comiencen a ahorrar de manera segura.
								</div>
								<div className="main-btn">
									<a className="btn btn-warning" href="/create-bank">
										Crear banquito
									</a>
								</div>
							</Col>
							<Col xs="12" md="4" className="box-2">
								<div className="box-title">
									Ahorra
								</div>
								<hr/>
								<div className="box-body">
									Disfruta de un fondo acumulado grupal al instante, fruto de tus ahorros mensuales en un periodo de tiempo.
								</div>
								<div className="main-btn">
									<a className="btn btn-warning" href="/create-bank">
										Crear banquito
									</a>
								</div>
							</Col>
							<Col xs="12" md="4" className="box-3">
								<div className="box-title">
									Crece
								</div>
								<hr/>
								<div className="box-body">
									Comparte tu historial con una entidad financiera y accede a préstamos increíbles.
								</div>
								<div className="main-btn">
									<a className="btn btn-warning" href="/create-bank">
										Crear banquito
									</a>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</div>
		);
	}
}