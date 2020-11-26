import React, {Component} from 'react'
import { Form, Row, Col, Container, Button, Jumbotron } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SearchProfile = () => {
  const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
  const location = useLocation();

  const [state, setState] = React.useState({
    first_name: location.state.detail.first_name,
    last_name: location.state.detail.last_name,
    speciality: location.state.detail.speciality,
    address: location.state.detail.address,
  });

    const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => { //GET
      event.preventDefault();
      alert("Date: " + state.date + 
      "\nTime: " + state.time);
    }

    const handleConfirm = (event) => { //POST
      event.preventDefault();
      const appointment = state.date + "/" + state.time;
      alert(appointment)
    }

    useEffect(() => {
      state.first_name = location.state.detail.first_name;
      state.last_name = location.state.detail.last_name;
      state.speciality = location.state.detail.speciality;
      state.address = location.state.detail.address;
    }, [location]);

    /*componentDidMount() {
        var item = this.props.history.location.state.item;
        console.log(this.props.history.location.state.item);
        this.setState({
          firstname: item.firstname,
          lastname: item.lastname,
          speciality: item.speciality,
          location: item.location,
        });
      }*/
    
    return (
        <Container>
          <Jumbotron style={{ backgroundColor: "#65aabf" }}>
            <Row>
              <Col>
                <h1>Profile Page</h1>
                <p>
                  First Name : {state.first_name}
                  {""}
                  <br />
                  Last Name : {state.last_name}
                  {""}
                  <br />
                  Speciality : {state.speciality}
                  <br />
                  Location : {state.address}
                </p>
              </Col>

              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Row>
                      <Form.Label for="date">Date: </Form.Label>
                      <Form.Control type="date" name="date" value={state.date} onChange={handleChange} />
                    </Row>
                    <br />
                    <Row>
                      <Form.Label for="time">Time: </Form.Label>
                      <Form.Control type="time" step="1800" name="time" value={state.time} onChange={handleChange} />
                    </Row>
                    <br />
                    <Button variant="dark" type="submit">Book Appointment</Button>{' '}
                      
                  </Form.Group>
                </Form>
      
                <p>
                  <Button variant="dark" onClick={handleConfirm}>Confirm Appointment</Button>
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      );
}
/*
function SearchProfile(props) {
  const { user, isLoading } = useAuth0();
  console.log(props);
  const location = useLocation();

  useEffect(() => {
    console.log(location); // result: '/secondpage'
    //console.log(location.search); // result: '?query=abc'
    console.log(location.state.details); // result: 'some_value'
  }, [location]);
  return (
    <div>
      <Jumbotron>
        <h1>Profile of {location.state.details.first_name} {location.state.details.last_name}</h1>
        <p>
          Speciality : {location.state.details.speciality}
          <br/>
          City : {location.state.details.city}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default SearchProfile;
*/
export default SearchProfile;