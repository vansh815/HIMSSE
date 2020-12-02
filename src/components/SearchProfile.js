import React, {Component} from 'react'
import { Form, Row, Col, Container, Button, Jumbotron } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";


const SearchProfile = () => {
  const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
  const location = useLocation();
  

  const [state, setState] = React.useState({
    first_name: location.state.detail.first_name,
    last_name: location.state.detail.last_name,
    speciality: location.state.detail.speciality,
    address: location.state.detail.address,
    doctor_email : location.state.detail.email
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const callSecureApi = async (query) => {
    const token = await getAccessTokenSilently();
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(query);
    const searchquery = await axios({
      headers: {
          authorization: `Bearer ${token}`
        },
      method: 'get',
      url: `${apiUrl}/booking/details`,
      params: query
    })
    return searchquery
  }

  const callSecureApiPost = async (payload) => {
    const token = await getAccessTokenSilently();
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("we are right here ",payload);
    const searchquery = await fetch(`${apiUrl}/booking/details` , {
      method : "POST",
      headers : {
          "Authorization": `Bearer ${token}`,
          "Content-Type" : "application/json",
      },
      body: JSON.stringify(payload),
  })
    return searchquery
}

  const handleSubmit = (event) => { // GET
    event.preventDefault();
    let query=  {
      doctor_email: state.doctor_email,
    }
    const searchquery = callSecureApi(query);
    console.log("here");
    console.log(searchquery);
    
    searchquery.then(result => { 
      let data = result.data;     

      const appointment = state.date + "/" + state.time; // user's pending appt

      var x = 0;
      var i;
      for (i = 0; i < data.length; i++) { // check availability of doctor
        console.log("Loop Index: " + i);
        if (data[i] === appointment) {
          x = 1;
          alert("Sorry, this time slot is not available. Please choose another time and try again.");
        }
      }

      if (x === 0) {
        alert("This time slot is available! Please click Confirm Appointment to continue.");
      }

      })
    .catch(error => { console.error(error); })
  };

  const handleConfirm = (event) => { //POST
    event.preventDefault();
    

    let payload = {
      doctor_email: state.doctor_email,
      appointments: state.date + "/" + state.time ,
    }

    
    const searchquery = callSecureApiPost(payload);
    console.log("Successful");
    console.log(searchquery);
  }

  useEffect(() => {
    state.first_name = location.state.detail.first_name;
    state.last_name = location.state.detail.last_name;
    state.speciality = location.state.detail.speciality;
    state.address = location.state.detail.address;
    state.doctor_email = location.state.detail.email;
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
                <Button variant="dark" type="submit">Check Availability</Button>{' '}
                  
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

export default SearchProfile;
