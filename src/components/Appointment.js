import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'

function Appointment() {
    const [state, setState] = React.useState({
        value: new Date().toISOString(),
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
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label for="value">Date:</Form.Label>
                    <DatePicker id="datepicker" value={state.value} onChange={handleChange} />

                    <Form.Label for="time">Time:</Form.Label>
                    <Form.Control type="text" name="time" value={state.time} onChange={handleChange} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Appointment