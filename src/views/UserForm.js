import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function UserForm() {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    const { getAccessTokenSilently } = useAuth0();
    const token = getAccessTokenSilently();
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

    const handleRoleChange = (event) => {
        setState({
            ...state,
            role: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
            <Row className="align-items-center profile-header mb-5 text-center text-md-left border-bottom border-dark">
                <Col md={2}>
                <img
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"

                />
                </Col>
                <Col md>
                <h2>{name}</h2>
                <p className="lead text-muted">{email}</p>

                <label for="roles">Choose a role: </label>
                <select name="roles" id="roles" onChange={handleRoleChange}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="insurance">Insurance</option>
                </select>
                </Col>
            </Row>

            <Row className="padding-bottom mb-5">
                <h4>Account Information</h4>
            </Row>

            {state.role == 'patient' && 
                <Row>
                    Patient 
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <label for="first_name">First name:</label><br />
                            <input type="text" name="first_name" value={state.first_name} onChange={handleChange} /><br /><br />
                            
                            <label for="last_name">Last name:</label><br />
                            <input type="text" name="last_name" value={state.last_name} onChange={handleChange} /><br /><br />

                            <label for="user_email">Email:</label><br />
                            <input type="email" name="user_email" value={state.user_email} onChange={handleChange} /><br /><br />

                            <label for="street_name">Street Name:</label><br />
                            <input type="text" name="street_name" value={state.street_name} onChange={handleChange} /><br /><br />

                            <label for="city">City:</label><br />
                            <input type="text" name="city" value={state.city} onChange={handleChange} /><br /><br />

                            <label for="state_name">State:</label><br />
                            <input type="text" name="state_name" value={state.state_name} onChange={handleChange} /><br /><br />

                            <label for="zip_code">Zip Code:</label><br />
                            <input type="number" name="zip_code" value={state.zip_code} onChange={handleChange} /><br /><br />
                        
                            <Button variant="primary" type="submit">Submit</Button>{' '}
                        </form>
                    </Col>
                </Row>
            }

            {state.role == 'doctor' && 
                <Row>
                    Doctor <br />
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <label for="first_name">First name:</label><br />
                            <input type="text" name="first_name" value={state.first_name} onChange={handleChange} /><br /><br />
                            
                            <label for="last_name">Last name:</label><br />
                            <input type="text" name="last_name" value={state.last_name} onChange={handleChange} /><br /><br />

                            <label for="user_email">Email:</label><br />
                            <input type="email" name="user_email" value={state.user_email} onChange={handleChange} /><br /><br />

                            <label for="street_name">Street Name:</label><br />
                            <input type="text" name="street_name" value={state.street_name} onChange={handleChange} /><br /><br />

                            <label for="city">City:</label><br />
                            <input type="text" name="city" value={state.city} onChange={handleChange} /><br /><br />

                            <label for="state_name">State:</label><br />
                            <input type="text" name="state_name" value={state.state_name} onChange={handleChange} /><br /><br />

                            <label for="zip_code">Zip Code:</label><br />
                            <input type="number" name="zip_code" value={state.zip_code} onChange={handleChange} /><br /><br />

                            <label for="specialty">Specialty:</label><br />
                            <input type="text" name="specialty" value={state.specialty} onChange={handleChange} /><br /><br />
                        
                            <Button variant="primary" type="submit">Submit</Button>{' '}
                        </form>
                    </Col>
                </Row>
            }

            {state.role == 'insurance' && 
                <Row>
                    Insurance <br />
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <label for="first_name">First name:</label><br />
                            <input type="text" name="first_name" value={state.first_name} onChange={handleChange} /><br /><br />
                            
                            <label for="last_name">Last name:</label><br />
                            <input type="text" name="last_name" value={state.last_name} onChange={handleChange} /><br /><br />

                            <label for="user_email">Email:</label><br />
                            <input type="email" name="user_email" value={state.user_email} onChange={handleChange} /><br /><br />

                            <label for="street_name">Street Name:</label><br />
                            <input type="text" name="street_name" value={state.street_name} onChange={handleChange} /><br /><br />

                            <label for="city">City:</label><br />
                            <input type="text" name="city" value={state.city} onChange={handleChange} /><br /><br />

                            <label for="state_name">State:</label><br />
                            <input type="text" name="state_name" value={state.state_name} onChange={handleChange} /><br /><br />

                            <label for="zip_code">Zip Code:</label><br />
                            <input type="number" name="zip_code" value={state.zip_code} onChange={handleChange} /><br /><br />

                            <label for="phone">Phone:</label><br />
                            <input type="tel" name="phone" value={state.phone} onChange={handleChange} /><br /><br />
                        
                            <Button variant="primary" type="submit">Submit</Button>{' '}
                        </form>
                    </Col>
                </Row>
            }

        </Container>
    )
}

export default UserForm;