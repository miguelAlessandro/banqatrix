import React from 'react'
import {BankList, BankForm} from './Bank';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem, NavLink } from 'reactstrap';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="4">
                        <BankForm></BankForm>
                    </Col>
                    <Col sm="8">
                        <BankList></BankList>
                    </Col>
                </Row>
            </Container>
        );
    }
}
