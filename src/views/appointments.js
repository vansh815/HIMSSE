import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components/navbar";

const UpcomingAppointments = () => {
    const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
      (async () => {
          const token = await getAccessTokenSilently();
          console.log(token)
          const response =  fetch(`${apiUrl}/appointments/details`, {method: "GET",headers: {Authorization:`Bearer ${token}`}})
          console.log(response);
          // if (response.body['role'] == "patient"){
          //     const final =  fetch(`${apiUrl}/patient/details`, {method: "GET",headers: {Authorization: `Bearer ${token}`}})
          // }
          // else {
          //   const final =  fetch(`${apiUrl}/doctor/details`, {method: "GET",headers: {Authorization: `Bearer ${token}`}})
          // }

          


        
    })(user);
  })
    return (
      <Container className="mb-5">
        <h1>External API</h1>
        <p>
          You use will use a button to call an external API using an access token,
          and the API will validate it using the API's audience value.{" "}
          <strong>This route should be private</strong>.
        </p>
      </Container>
    )
}

export default UpcomingAppointments;