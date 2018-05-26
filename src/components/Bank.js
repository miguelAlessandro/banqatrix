import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Bank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Amigos Ahorradores</p>
                <p>Periodo 5/8</p>
                <p>Integrantes</p>
                <ul>Jean Pierre Mandujano</ul>
                <ul>Renzo Mogrovejo</ul>
                <ul>Miguel Miní</ul>
                <ul>José Huallpa</ul>
            </div>
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
            members: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            name: event.target.name,
            periodicity: event.target.periodicity,
            fee: event.target.fee,
            members: event.target.members
        });
    }

    render() {
        return (
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
                <FormGroup check row>
                    <Col sm={{size: 10, offset: 2}}>
                        <Button>Crear</Button>
                    </Col>
                </FormGroup>
            </Form>
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
                <ul>Amigos ahorradores</ul>
                <ul>Familia ahorradora</ul>
                <ul>Estafa piramidal</ul>
                <ul>Los misios</ul>
            </div>
        );
    }
}
