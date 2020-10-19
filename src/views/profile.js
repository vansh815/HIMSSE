import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Highlight } from "../components/navbar";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

	function getInsurance(){
  		var insurance = prompt('Insurance:', 'Please insert Insurance');
		if (insurance != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getTitle(){
  		var title = prompt('Specialization:', 'Please insert your specialization');
		if (title != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getDescription(){
  		var description = prompt('About:', 'Please insert your relevant information');
		if (description != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getStreetAddress(){
  		var street = prompt('Street:', 'please enter your street address');
		if (street != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getCityAddress(){
  		var city = prompt('City:', 'please enter your city');
		if (city != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getStateAddress(){
  		var state = prompt('State:', 'please enter your state');
		if (state != null) {
			{/* do something with the var, address */}
		}		
	}
	
	function getZIPAddress(){
  		var zip = prompt('Insurance:', 'please enter your zip code');
		if (zip != null) {
			{/* do something with the var, address */}
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
		name of insurance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
		street address
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getStreetAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		city
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getCityAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		state
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getStateAddress}>Edit</button>
		</p>
		<p className="lead text-muted text-right">
		zip code
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button onClick={getZIPAddress}>Edit</button>
		</p>
	  </Row>
    </Container>
  );
};

export default Profile;