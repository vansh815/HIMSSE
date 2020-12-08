import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components/navbar";
import axios from 'axios'

const UpcomingAppointments = () => {
    const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;

    const [state, setState] = React.useState({
      appts: ''
  });

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
              console.log(finalQuery)
          }
          else {
            const final =  fetch(`${apiUrl}/doctor/details`, {method: "GET",headers: {Authorization: `Bearer ${token}`}})
          }

          


        
    })(user);
  })
    return (
      <Container className="mb-5">
        
      </Container>
    )
}

export default UpcomingAppointments;