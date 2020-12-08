import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components/navbar";
import axios from 'axios'

const UpcomingAppointments = () => {
  const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
  const apiUrl = process.env.REACT_APP_API_URL;

  let apptsLength = 0;
  let apptsList = [];

  const [state, setState] = React.useState({
    name: '',
    appts: []
  });

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

  const displayAppts = () => {
    return state.appts.map((appt) => <li>{appt}</li>);
  }

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();

      const searchquery = await axios({
        headers: {
            authorization: `Bearer ${token}`
          },
        method: 'get',
        url: `${apiUrl}/appointments/details`,
      })

      const userEmail = searchquery.data[0].email
      console.log("working request data")
      console.log(searchquery)

      if (searchquery.data[0].role == "patient") {
        //const final =  fetch(`${apiUrl}/patient/details`, {method: "GET",headers: {Authorization: `Bearer ${token}`}})
        const finalQuery = await axios({
          headers: {
              authorization: `Bearer ${token}`,
              //email: userEmail
            },
          method: 'get',
          url: `${apiUrl}/patient/details`,
        })
        console.log(finalQuery.data[0])
      }

      else {
        let doctorQuery = {
          doctor_email: userEmail,
        }

        const finalQuery = await axios({
          headers: {
              authorization: `Bearer ${token}`
            },
          method: 'get',
          url: `${apiUrl}/booking/details`,
          params: doctorQuery
        })
        console.log("doctor appts here");
        console.log(finalQuery.data[0])
        const username = finalQuery.data[0].first_name
        apptsLength = finalQuery.data[0].appointments.length
        apptsList = finalQuery.data[0].appointments

        setState({
          ...state,
          name: username,
          appts: apptsList
        });
      }

    })(user);
  })

  return (
    <Container className="mb-5">
      <h1>Upcoming Appointments for {state.name}:</h1>
      <p>{
        state.appts.map((appt) => <li>{appt}</li>)
      }</p>
    </Container>
  )
}

export default UpcomingAppointments;