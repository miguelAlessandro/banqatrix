import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem, NavLink } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert } from 'reactstrap';
import '../styles/bank.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Progress } from 'reactstrap';

export default class Bank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <strong>Amigos Ahorradores</strong>
                    </Col>
                    <br/>
                    <br/>
                    <Col sm="12">
                        <Progress value={75} color="success"/>
                        <div className="text-center">Periodo 5/8</div>
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
            name: "",
            periodicity: "",
            fee: "",
            members: "",
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
            modal: !this.state.modal,
            name: "manduinca"
        });
        if (this.state.modal) {
            localStorage.setItem('state', JSON.stringify(this.state));    
        }
    }    

    render() {
        return (
            <div className="content">
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
                                <option value="mensual">Mensual</option>
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
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
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
            <div>
                <ListGroup>
                    <div>Tus cuentas activas</div>
                    <br/>
                    <ListGroupItem active>Amigos Ahorradores</ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <ListGroup>
                    <div>Otros Banquitos que puedes unirte:</div>
                    <br/>
                    <ListGroupItem>Banquito Familia</ListGroupItem>
                    <ListGroupItem>Pro Navidad</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Rusia 2018</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
