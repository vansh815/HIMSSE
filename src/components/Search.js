import React from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
//import Button from 'react-bootstrap/Button';
import "./Search.css";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
const Search = (props) => {
    const { getAccessTokenSilently } = useAuth0();
    //const token = getAccessTokenSilently();
    const history = useHistory();
    const [state, setState] = React.useState({
        first_name: '',
        last_name: '',
        speciality: '',
        city: ''
      });
    
      const callSecureApi = async (query) => {
        const token = await getAccessTokenSilently();
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log(query)
        const searchquery = await axios({
          headers: {
              authorization: `Bearer ${token}`
            },
          method: 'get',
          url: `${apiUrl}/doctor/details`,
          params : query
        })
        return searchquery
      }
      const clickProf = () => {
        history.push("/SearchProfile")
        //console.log(history);
      }
      const handleSubmit = (event) => {
        let searchBox = document.getElementById("demo");
        searchBox.innerHTML = "";
          var fullSearch = state.first_name + ' ' + state.last_name + ' ' + state.speciality + ' ' + state.city;
          event.preventDefault();
          let query=  {
            first_name: state.first_name,
            last_name: state.last_name,
            speciality: state.speciality,
            city: state.city
          }
          const searchquery = callSecureApi(query);
          
          searchquery.then(result => { 
            let data = result.data;
            console.log(result); 
            let len = data.length
            let searchCards = document.getElementById("demo");      
            let userResults = `<h1>Your search of ${fullSearch} returned ${len} results.</h1>`;
            searchCards.insertAdjacentHTML("afterbegin", userResults);
            data.map(res => {
                let resString = 
                `<div class="searchData" data-index="${res._id}">
                <button variant = "link" onClick= clickProf()>${res.first_name} ${res.last_name} - ${res.speciality} in ${res.city}</a>
                </div>`;

                searchCards.insertAdjacentHTML("beforeend", resString);}
                )
            // document.getElementById("demo").innerHTML = text; 
           })
          .catch(error => { console.error(error); })
  
          setState({first_name:'',
                   last_name: '',
                   speciality:'',
                  city: ''});        
      }
    
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
   
    return (
      <div class= "searchResults">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label for="first_name">First name:</Form.Label>
              <Form.Control type="text" name="first_name" value={state.first_name} onChange={handleChange} placeholder="e.g John"/>
              <br />
          
              <Form.Label for="last_name">Last name:</Form.Label>
              <Form.Control type="text" name="last_name" value={state.last_name} onChange={handleChange} placeholder="e.g Doe"/>
              <br />

              <Form.Label for="speciality">Specialization</Form.Label>
              <Form.Control type="text" name="speciality" value={state.speciality} onChange={handleChange} placeholder="e.g dentist"/>
              <br />

              <Form.Label for="city">Location:</Form.Label>
              <Form.Control type="text" name="city" value={state.city} onChange={handleChange} placeholder = "e.g Bloomington"/>
          </Form.Group>
            <Button variant="primary" size="sm" type="submit">Submit</Button>
        </Form>
        
        <div id = "demo"></div>
        
        </div>
    )
}

export default Search
