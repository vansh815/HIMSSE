import React, { Component } from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
function results (data, fullSearch)
    {
      let len = data.length
      if (fullSearch == '   '){
        fullSearch = "nothing"
      }
      if (len == 0){
          return "Your search of " + fullSearch + " returned no results"
      }
      let resString = "Your search of " + fullSearch + " returned " + len + " results <p>"
      for(let i = 0; i < len; i++){
        let res = data[i]
        resString += "" + res.first_name + " " + res.last_name + " specialty: " + res.speciality + " location: " + res.city + "<p>";
      }
      return resString
    }
const Search = (props) => {
    let text = ""
    const { getAccessTokenSilently } = useAuth0();
    const token = getAccessTokenSilently();
    const [state, setState] = React.useState({
        first_name: '',
        last_name: '',
        speciality: '',
        city: ''
      });
    
    
    
    const handleSubmit = (event) => {
        var fullSearch = state.first_name + ' ' + state.last_name + ' ' + state.speciality + ' ' + state.city;
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
        searchquerry.then(result => {text = results(result.data, fullSearch); console.log(result); document.getElementById("demo").innerHTML = text;  })
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
      <div className= "searchResults">
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="first_name" value = {state.first_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter last name..." name="last_name" value = {state.last_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="speciality" value = {state.speciality} onChange={handleChange} />
            <input type = "text" placeholder="Enter location..." name="city" value = {state.city} onChange={handleChange} />
            <button type = "submit" value = "submit">Search</button> 
        </form>
        {/* search results here*/}
        <p id = "demo"></p>
        
        </div>
    )
}

export default Search
