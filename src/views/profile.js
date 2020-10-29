import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col } from "react-bootstrap";
import { Highlight } from "../components/navbar";

import { useAuth0 } from "@auth0/auth0-react";
 
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const { getAccessTokenSilently } = useAuth0();
  const token = getAccessTokenSilently();
  const [state, setState] = React.useState({
        first_name: '',
        last_name: '',
		user_email: {email},
		insurance: 'insurance provider',
        street_name: 'street name',
    	city: 'city',
    	state_name: 'state',
    	zip_code: 'zip code'
      });


    const handleSubmit = (event) => {
  		axios({
            headers: {
                authorization: 'Bearer ${token}'
              },
            method: 'get',
            url: 'http://localhost:3010/patient/details',
            data: {
			  
              first_name: state.first_name,
              last_name: state.last_name,
			  insurance: state.insurance,
              street_name: state.street_name,
    		  city: state.city,
    		  state_name: state.state_name,
    		  zip_code: state.zip_code,
            }
          });
        setState({first_name: '',
        last_name: '',
		insurance: state.insurance,
        street_name: state.street_name,
    	city: state.city,
    	state_name: state.state_name,
    	zip_code: state.zip_code});
        console.log({token});
	}
        

	function getInsurance(){
  		state.insurance = prompt('Insurance:', 'Please insert Insurance');
		if (state.insurance != null) {
			axios.post('http://localhost:3010/patient/details', {
				insurance: state.insurance
				});
			handleSubmit();
		}		
	}
	
	function getTitle(){
  		var title = prompt('Specialization:', 'Please insert your specialization');
		if (title != null) {
			{/* do something with the var */}
		}		
	}
	
	
	function getDescription(){
  		var description = prompt('About:', 'Please insert your relevant information');
		if (description != null) {
			{/* do something with the var */}
		}		
	}
	
	function getStreetAddress(){
  		state.street_name = prompt('Street:', 'please enter your street address');
		if (state.street_name != null) {
			axios.post('http://localhost:3010/patient/details', {
				street_name: state.street_name
				});
			handleSubmit();
		}		
	}
	
	function getCityAddress(){
  		state.city = prompt('City:', 'please enter your city');
		if (state.city != null) {
			axios.post('http://localhost:3010/patient/details', {
				city: state.city
				});
			handleSubmit();
		}		
	}
	
	function getStateAddress(){
  		state.state_name = prompt('State:', 'please enter your state');
		if (state.state_name != null) {
			axios.post('http://localhost:3010/patient/details', {
				state_name: state.state_name
				});
			handleSubmit();
		}		
	}
	
	function getZIPAddress(){
  		state.zip_code = prompt('Insurance:', 'please enter your zip code');
		if (state.zip_code != null) {
			axios.post('http://localhost:3010/patient/details', {
				zip_code: state.zip_code
				});
			handleSubmit();
		}		
	}

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left border-bottom border-dark">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"

          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
          <p className="card lead text-muted">Patient</p>
        </Col>
      </Row>
        {/*<Highlight>{JSON.stringify(user, null, 2)}</Highlight>*/}

	  <Row className="padding-bottom mb-5">
		<h4>Account Information</h4>
	  </Row>

	{/* Insurance information for Patients */}
      <Row className="card padding-bottom mb-3">
		<p className="lead text-muted">{'\t'}Insurance:</p>
		<p className="lead text-muted text-right">
		{state.insurance}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getInsurance}>Edit</button>
		</p>
	  </Row>

	{/* Specialization information for Doctors */}
	{/*
	<Row className="card padding-bottom mb-3">
		<p className="lead text-muted">{'\t'}Specialization:</p>
		<p className="lead text-muted text-right">
		title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getTitle}>Edit</button>
		</p>
	  </Row>
	*/}

	{/* About section for Doctors and Insurance */}
	{/*
	<Row className="card padding-bottom mb-3">
		<p className="lead text-muted">{'\t'}About:</p>
		<p className="lead text-muted text-right">
		description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getDescription}>Edit</button>
		</p>
	</Row>
	*/}
	
	{/* Address information for Patients and Doctors */}
	  <Row className="card padding-bottom mb-3">
		<p className="lead text-muted">{'\t'}Address:</p>
		<p className="lead text-muted text-right">
		{/*street address*/}
		{state.street_name}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getStreetAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		{state.city}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getCityAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		{state.state_name}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getStateAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		{state.zip_code}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getZIPAddress}>Edit</button>
		</p>
	  </Row>
    </Container>
  );
};

export default Profile;
