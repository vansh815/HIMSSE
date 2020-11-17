import React from 'react'
import { Row, Button, Form } from "react-bootstrap";

function Appointment() {
    const [state, setState] = React.useState({
        date: new Date(),
        time: ""
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Date: " + state.date + 
        "\nTime: " + state.time);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Row>
                        <Form.Label for="date">Date: </Form.Label>
                        <Form.Control type="date" name="date" value={state.date} onChange={handleChange} />
                    </Row>
                    <br />
                    <Row>
                        <Form.Label for="time">Time: </Form.Label>
                        <Form.Control type="time" name="time" value={state.time} onChange={handleChange} />
                    </Row>
                    <br />
                    <Button variant="primary" type="submit">Submit</Button>{' '}
                    
                </Form.Group>
            </Form>
        </div>
    )
}

export default Appointment