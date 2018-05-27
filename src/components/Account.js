import React from 'react'
import Bank, {BankList, BankForm} from './Bank';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/account.css'

export default class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <div className="content">
                    <Row>
                        <Col xs="12" md="4">
                            <BankList></BankList>
                        </Col>
                        <Col xs="12" md="8">
                            <Bank></Bank>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
