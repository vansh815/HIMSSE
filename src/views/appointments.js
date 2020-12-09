import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components/navbar";
import axios from 'axios'

const UpcomingAppointments = () => {
  const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
  const apiUrl = process.env.REACT_APP_API_URL;

  let apptsList = [];

  const [state, setState] = React.useState({
    name: '',
    appts: []
  });

  const callDoctorApi = async (query) => {
    const token = await getAccessTokenSilently();
    const apiUrl = process.env.REACT_APP_API_URL;
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
      const query = {
        email : userEmail,
      }
      if (searchquery.data[0].role == "patient") {
        const finalQuery = await axios({
          headers: {
              authorization: `Bearer ${token}`,
              //email: userEmail
            },
          method: 'get',
          url: `${apiUrl}/patient/details`,
          params : query,
        })
        console.log(finalQuery.data[0])
      }

      else {
        let doctorQuery = {
          doctor_email: userEmail,
        }
        const finalQuery = callDoctorApi(doctorQuery);

        finalQuery.then(result => {
          const username = result.data[0].first_name
          apptsList = result.data[0].appointments

          setState({
            ...state,
            name: username,
            appts: apptsList
          });
        })
        .catch(error => { console.error(error); })
      }
    })(user);
  }, [user])

  return (
    <Container className="mb-5">
      <h1>Upcoming Appointments for {state.name}:</h1>
      <p>{ state.appts.map((appt) => <li>{appt}</li>) }</p>
    </Container>
  )
}

export default UpcomingAppointments;