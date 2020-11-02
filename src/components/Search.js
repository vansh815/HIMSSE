import React, { Component } from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
function results (data, fullSearch)
    {
      let len = data.length
      if (fullSearch == '   '){
        fullSearch = "nothing"
      }
      
      let searchCards = document.getElementById("demo");
      
      let userResults = `<h1>Your search of ${fullSearch} returned ${len} results.</h1>`;
      searchCards.insertAdjacentHTML("afterbegin", userResults);
      for(let i = 0; i < len; i++){
        let res = data[i]
        // example url
        let resString = `<div class="searchData" data-index="${res._id}"><a href="https://www.youtube.com/watch?v=DLzxrzFCyOs" target="_blank"><h2>${res.first_name} ${res.last_name} - ${res.speciality} in ${res.city}</h2></a></div>`;

        searchCards.insertAdjacentHTML("beforeend", resString);
        //makeCard(data)
      
      }
      
    }

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
      let searchBox = document.getElementById("demo");
      searchBox.innerHTML = "";
        var fullSearch = state.first_name + ' ' + state.last_name + ' ' + state.speciality + ' ' + state.city;
        event.preventDefault();
        const searchquery = axios({
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
        searchquery.then(result => {
          results(result.data, fullSearch); 
          console.log(result); 
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
      <div className= "searchResults">
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="first_name" value = {state.first_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter last name..." name="last_name" value = {state.last_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="speciality" value = {state.speciality} onChange={handleChange} />
            <input type = "text" placeholder="Enter location..." name="city" value = {state.city} onChange={handleChange} />
            <button type = "submit" value = "submit">Search</button> 
        </form>
        {/* search results here*/}
        <div id = "demo"></div>
        
        </div>
    )
}

export default Search
