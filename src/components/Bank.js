import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem, NavLink } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert } from 'reactstrap';
import '../styles/bank.css';

export default class Bank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="6">
                        <p>Amigos Ahorradores</p>
                    </Col>
                    <Col sm="6">
                        <p>Periodo 5/8</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <p>Integrantes</p>
                        <ul>
                          <li to="/">Silene Oliveira</li>
                          <li to="/">Andres Fonollosa</li>
                          <li to="/">Sergio Marquina</li>
                        </ul>
                    </Col>
                </Row>
                <Button color="success">Pagar cuota</Button>
            </Container>
        );
    }
}


export class BankForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            periodicity: null,
            fee: null,
            members: null,
            modal: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            name: event.target.name,
            periodicity: event.target.periodicity,
            fee: event.target.fee,
            members: event.target.members
        });
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
      });
    }    

    render() {
        return (
            <div className="form-bank">
            <Container className="form">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label sm={2}>Nombre:</Label>
                        <Col sm={10}>
                            <Input type="text" value={this.state.name} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Periodicidad:</Label>
                        <Col sm={10}>
                            <Input type="select" value={this.state.periodicity}>
                                <option value="semanal">Semanal</option>
                                <option value="quincenal">Quincenal</option>
                                <option selected value="mensual">Mensual</option>
                                <option value="bimensual">Bimensual</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Cuota:</Label>
                        <Col sm={10}>
                            <Input type="number" value={this.state.fee} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Integrantes:</Label>
                        <Col sm={10}>
                            <Input type="text" value={this.state.members} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button className="btn btn-warning" onClick={this.toggle}>Crear</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
              <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Creación de cuenta</ModalHeader>
                  <ModalBody>
                      <Alert color="success">
                        Se ha creado correctamente la cuenta.
                      </Alert>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="warning" onClick={this.toggle}>Aceptar</Button>{' '}
                  </ModalFooter>
                </Modal>
              </div>
            </div>
        );
    }
}


export class BankList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav vertical>
                <NavItem>
                  <NavLink to="/">Amigos Ahorradores</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Banquito Familia</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Pro Navidad</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Rusia 2018</NavLink>
                </NavItem>
            </Nav>
        );
    }
}
