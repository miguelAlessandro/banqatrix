import React from 'react'
import Bank, {BankList, BankForm} from './Bank';
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
                        <Bank></Bank>
                    </Col>
                    <Col sm="8">
                        <BankList></BankList>
                    </Col>
                </Row>
            </Container>
        );
    }
}
