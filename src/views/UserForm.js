import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { queryHelpers } from '@testing-library/react';
import "./UserForm.css";

function UserForm() {
    const { user } = useAuth0();
    const { name, picture, email } = user;
    const apiUrl = process.env.REACT_APP_API_URL;
    const { getAccessTokenSilently } = useAuth0();
    const [state, setState] = React.useState({
        role: 'patient',
        first_name: '',
        last_name: '',
		user_email: '',
		insurance: '',
        street_name: '',
    	city: '',
    	state_name: '',
        zip_code: '',
        specialty: '',
        phone: ''
    });
    const [query1,setQuery] = React.useState("")

    const handleRoleChange = (event) => {
        setState({
            ...state,
            role: event.target.value
        });
    }
    const callSecureApi = async (query) => {
        const token = await getAccessTokenSilently();
        fetch(`${apiUrl}/user/details` , {
            method : "POST",
            headers : {
                "Authorization": `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            body: query,
        }).then((response) => {
            if (!response.ok){
                console.log("Error");
            } else{
                console.log("Success");
            }
        });
    };

    const handleSubmit_patient = (event) => {
        event.preventDefault();
        let query = JSON.stringify({
            first_name: state.first_name,
            last_name: state.last_name,
            email : state.user_email, 
            street_name : state.street_name,
            city: state.city, 
            zip_code : state.zip_code,
            role : "patient",
        });
        callSecureApi(query);
        alert("First Name: " + state.first_name + 
        "\nLast Name: " + state.last_name);
    };


    const handleSubmit_doctor = (event) => {
        event.preventDefault();
        let query = JSON.stringify({
            first_name: state.first_name,
            last_name: state.last_name,
            email : state.user_email, 
            street_name : state.street_name,
            city: state.city, 
            zip_code : state.zip_code,
            role : "doctor",
            specialty : state.specialty
        });
        
        callSecureApi(query);

        alert("First Name: " + state.first_name + 
        "\nLast Name: " + state.last_name);
    }
    const handleSubmit_insurance_manager = (event) => {
        event.preventDefault();
        let query = JSON.stringify({
            first_name: state.first_name,
            last_name: state.last_name,
            email : state.user_email, 
            street_name : state.street_name,
            city: state.city, 
            zip_code : state.zip_code,
            role : "insurance_manager",
            specialty : state.specialty
        });
        
        callSecureApi(query);

        alert("First Name: " + state.first_name + 
        "\nLast Name: " + state.last_name);
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <Container className="mb-5">
            <div className="align-items-center">
            <Row className="align-items-center profile-header mb-4 text-center text-md-left border-bottom border-dark">
                <Col md={2}>
                <img
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"

                />
                </Col>
                <Col md className="mb-3">
                    <h2>{name}</h2>
                    <p className="lead text-muted">{email}</p>

                    <Form.Control as="select" name="roles" id="roles" onChange={handleRoleChange}  >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="insurance">Insurance</option>
                    </Form.Control>
                </Col>
            </Row>
            </div>

            <Col md="8" className="user-form">
                <Card className="card-user">
                    <Card.Header> 
                        <Card.Title tag="h4">Account Information</Card.Title>
                    </Card.Header>

                    {state.role == 'patient' && 
                        <Form onSubmit={handleSubmit_patient} className="ml-2 mb-2 mr-2">
                            <Row className="mt-1">
                                <Col>
                                    <Form.Group>
                                        <Form.Label for="first_name">First name:</Form.Label>
                                        <Form.Control type="text" name="first_name" value={state.first_name} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                
                                <Col>
                                    <Form.Group>
                                        <Form.Label for="last_name">Last name:</Form.Label>
                                        <Form.Control type="text" name="last_name" value={state.last_name} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col>
                                    <Form.Group>
                                        <Form.Label for="user_email">Email:</Form.Label>
                                        <Form.Control type="email" name="user_email" value={state.user_email} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col>
                                    <Form.Group>
                                        <Form.Label for="street_name">Address:</Form.Label>
                                        <Form.Control type="text" name="street_name" value={state.street_name} onChange={handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label for="city">City:</Form.Label>
                                        <Form.Control type="text" name="city" value={state.city} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label for="state_name">State:</Form.Label>
                                        <Form.Control type="text" name="state_name" value={state.state_name} onChange={handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label for="zip_code">Zip Code:</Form.Label>
                                        <Form.Control type="number" name="zip_code" value={state.zip_code} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        
                            <Button variant="primary" type="submit">Submit</Button>{' '}
                        </Form>
                    }

                    {state.role == 'doctor' && 
                        <Form onSubmit={handleSubmit_doctor} className="ml-2 mb-2 mr-2">
                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="first_name">First name:</Form.Label>
                                    <Form.Control type="text" name="first_name" value={state.first_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            
                            <Col>
                                <Form.Group>
                                    <Form.Label for="last_name">Last name:</Form.Label>
                                    <Form.Control type="text" name="last_name" value={state.last_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="user_email">Email:</Form.Label>
                                    <Form.Control type="email" name="user_email" value={state.user_email} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="street_name">Address:</Form.Label>
                                    <Form.Control type="text" name="street_name" value={state.street_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label for="city">City:</Form.Label>
                                    <Form.Control type="text" name="city" value={state.city} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="state_name">State:</Form.Label>
                                    <Form.Control type="text" name="state_name" value={state.state_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label for="zip_code">Zip Code:</Form.Label>
                                    <Form.Control type="number" name="zip_code" value={state.zip_code} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="specialty">Specialty:</Form.Label>
                                    <Form.Control type="text" name="specialty" value={state.specialty} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                    
                        <Button variant="primary" type="submit">Submit</Button>{' '}
                    </Form>
                    }

                    {state.role == 'insurance' && 
                        <Form onSubmit={handleSubmit_insurance_manager} className="ml-2 mb-2 mr-2">
                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="first_name">First name:</Form.Label>
                                    <Form.Control type="text" name="first_name" value={state.first_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            
                            <Col>
                                <Form.Group>
                                    <Form.Label for="last_name">Last name:</Form.Label>
                                    <Form.Control type="text" name="last_name" value={state.last_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="user_email">Email:</Form.Label>
                                    <Form.Control type="email" name="user_email" value={state.user_email} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-1">
                            <Col>
                                <Form.Group>
                                    <Form.Label for="street_name">Address:</Form.Label>
                                    <Form.Control type="text" name="street_name" value={state.street_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label for="city">City:</Form.Label>
                                    <Form.Control type="text" name="city" value={state.city} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="state_name">State:</Form.Label>
                                    <Form.Control type="text" name="state_name" value={state.state_name} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label for="zip_code">Zip Code:</Form.Label>
                                    <Form.Control type="number" name="zip_code" value={state.zip_code} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="phone">Phone:</Form.Label>
                                    <Form.Control type="number" name="phone" value={state.phone} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                    
                        <Button variant="primary" type="submit">Submit</Button>{' '}
                    </Form>
                    }
                </Card>
            </Col>
        </Container>
    )
}

export default UserForm;