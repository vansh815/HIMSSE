import React from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react"
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap"

function Survey() {
    const [state, setState] = React.useState({
        symptom1: "false",
        symptom2: "false",
        symptom3: "false",
        symptom4: "false",
        symptom5: "false",
        symptom6: "false",
        symptom7: "false",
        symptom8: "false",
        symptom9: "false",
        symptom10: "false"
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("\n\nDiagnosis: " + calculateDiagnosis());

        setState({
            symptom1: "false",
            symptom2: "false",
            symptom3: "false",
            symptom4: "false",
            symptom5: "false",
            symptom6: "false",
            symptom7: "false",
            symptom8: "false",
            symptom9: "false",
            symptom10: "false"
        });
    }

    function calculateDiagnosis() {
        var count = 0;

        if (state.symptom1 == "true") { count++ }
        if (state.symptom2 == "true") { count++ } 
        if (state.symptom3 == "true") { count++ } 
        if (state.symptom4 == "true") { count++ }
        if (state.symptom5 == "true") { count++ }
        if (state.symptom6 == "true") { count++ } 
        if (state.symptom7 == "true") { count++ } 
        if (state.symptom8 == "true") { count++ } 
        if (state.symptom9 == "true") { count++ }
        if (state.symptom10 == "true") { count++ } 

        if (count > 2) {return "at risk for COVID"}
        else {return "nothing"}
    }

    return (
        <Container className="mb-5">
            <Form onSubmit={handleSubmit}>
                <Col md="8" className="user-form">
                    <Form.Label>Please indicate if you have experienced any of the following symptoms:</Form.Label>
                    <br /><br />
                    
                    <Form.Label for="symptom1">  Fever or Chills</Form.Label>
                    <Form.Control type="checkbox" name="symptom1" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom2">  Cough</Form.Label>
                    <Form.Control type="checkbox" name="symptom2" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom3">  Trouble breathing</Form.Label>
                    <Form.Control type="checkbox" name="symptom3" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom4">  Fatigue</Form.Label>
                    <Form.Control type="checkbox" name="symptom4" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom5">  Muscle or body aches</Form.Label>
                    <Form.Control type="checkbox" name="symptom5" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom6">  Headache</Form.Label>
                    <Form.Control type="checkbox" name="symptom6" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom7">  Loss of taste or smell</Form.Label>
                    <Form.Control type="checkbox" name="symptom7" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom8">  Sore Throat</Form.Label>
                    <Form.Control type="checkbox" name="symptom8" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom9">  Nausea</Form.Label>
                    <Form.Control type="checkbox" name="symptom9" value="true" onChange={handleChange} />
                    <br />
                    <Form.Label for="symptom10">  Diarrhea</Form.Label>
                    <Form.Control type="checkbox" name="symptom10" value="true" onChange={handleChange} />
                    <br />
                    <Button variant="primary" type="submit" value="submit">Submit</Button> 

                </Col>
            </Form>
        </Container>
    )
}

export default Survey
