import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import JSONPretty from "react-json-pretty";
import { withRouter } from "react-router";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Search2 = (props) => {
    const {user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [response, setResponse] = useState(null);
  let history = useHistory();
  let token;
  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    speciality: "",
    city: "",
    valid: "",
  });
  const [divi, setdivi] = useState(null);
  function redirectToProfile(item) {
    history.push({ pathname: "/searchProfile", state: { details: item } });
  }
  const callYourAPI = (e) => {
    getAccessTokenSilently().then((res)=>

    {   console.log(res);
        token = res;
        console.log(token)})
        .catch(error => console.log(error));
    const apiUrl = 'http://localhost:3010';
    let query = {
        first_name: state.first_name,
        last_name: state.last_name,
        speciality: state.speciality,
        city: state.city,
      };
    console.log(query)
    e.preventDefault();
    axios
      .get(`${apiUrl}/doctor/details`,{
        headers: {
            authorization: `Bearer ${token}`
          },
        params : query
      })
      .then((res) => {
        // Handle Your response here.
        // Likely you may want to set some state
        let division = res.data.map((item) => {
          return (
            <Card
              style={{ width: "25rem", display: "flex", flexDirection: "row" }}
            >
              <Card.Img
                variant="left"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  height: "50%",
                }}
                src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/1/2131.12-doctor-icon-iconbunny.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {item.first_name} {item.last_name}
                </Card.Title>
                <Card.Text>
                  Speciality : {item.speciality}
                  <br />
                  City : {item.city}
                </Card.Text>
                <Button variant="primary" onClick={()=>redirectToProfile(item)}>
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          );
        });
        setdivi(division);
        setResponse(res);
        console.log(res);
      })
      .catch(error => { console.error(error); });
  }

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/*<JSONPretty data={user} />*/}

        <Form onSubmit={callYourAPI}>
          <Form.Group>
            <Form.Label for="first_name">First name:</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              value={state.first_name}
              onChange={handleChange}
              placeholder="e.g John"
            />
            <br />
            <Form.Label for="last_name">Last name:</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={state.last_name}
              onChange={handleChange}
              placeholder="e.g Doe"
            />
            <br />​<Form.Label for="speciality">Specialization</Form.Label>
            <Form.Control
              type="text"
              name="speciality"
              value={state.speciality}
              onChange={handleChange}
              placeholder="e.g dentist"
            />
            <br />​<Form.Label for="city">Location:</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={state.city}
              onChange={handleChange}
              placeholder="e.g Bloomington"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Get Search Result
          </Button>
        </Form>

        {/* {JSON.stringify(user, null, 2)} */}
        {divi}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={callYourAPI}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card> */}
      </div>
    )
  );
};

export default Search2;
