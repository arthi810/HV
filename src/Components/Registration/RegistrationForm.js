import React, { Component } from "react";
import { Form, Button, Col, Row, Container, h1 } from 'react-bootstrap';

export default class RegistrationForm extends Component {
    render() {
        return (
            <Container>
            <Row>
                <Col xs={12}><h1 class="text-center" >Registration Form </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={6}>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" placeholder="Create New Password" />
                        <Form.Text className="text-muted">
                        Password should contain atleast 6 characters
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicOrganisation">
                        <Form.Label>Organisation</Form.Label>
                        <Form.Control type="text" placeholder="Organisation Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCategoryType">
                        <Form.Label>Category Type</Form.Label>
                        <Form.Control type="text" placeholder="Category Type" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
            </Container>
        );
    }
}