import React, { Component } from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const Search = (props) => {
    const { getAccessTokenSilently } = useAuth0();
    const token = getAccessTokenSilently();
    const [state, setState] = React.useState({
        first_name: '',
        last_name: '',
        speciality: '',
        city: ''
      });

    const handleSubmit = (event) => {
        alert( state.first_name + ' ' + state.last_name + ' ' + state.speciality + ' ' + state.city);
        event.preventDefault();
        const searchquerry = axios({
            headers: {
                authorization: 'Bearer ${token}'
              },
            method: 'get',
            url: 'http://localhost:3010/doctor/details',
            params: {
              first_name: state.first_name,
              last_name: state.last_name,
              speciality: state.speciality,
              city: state.city
            }
          });
        console.log(searchquerry);
        setState({first_name:'',
                 last_name: '',
                 speciality:'',
                city: ''});
        console.log({token});
        

    }
    
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="first_name" value = {state.first_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter last name..." name="last_name" value = {state.last_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="speciality" value = {state.speciality} onChange={handleChange} />
            <input type = "text" placeholder="Enter location..." name="city" value = {state.city} onChange={handleChange} />
            <button type = "submit" value = "submit">Search</button> 
        </form>
    )
}

export default Search
