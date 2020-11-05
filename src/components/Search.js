import React from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import "./Search.css";
function results (data, fullSearch)
    {
      let len = data.length
      
      
      let searchCards = document.getElementById("demo");
      
      let userResults = `<h1>Your search of ${fullSearch} returned ${len} results.</h1>`;
      searchCards.insertAdjacentHTML("afterbegin", userResults);
      for(let i = 0; i < len; i++){
        let res = data[i]
        // example url
        let resString = `<div class="searchData" data-index="${res._id}"><a href="https://www.google.com" target="_blank">${res.first_name} ${res.last_name} - ${res.speciality} in ${res.city}</a></div>`;

        searchCards.insertAdjacentHTML("beforeend", resString);
      
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
      <div class= "searchResults">
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="first_name" value = {state.first_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter last name..." name="last_name" value = {state.last_name} onChange={handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="speciality" value = {state.speciality} onChange={handleChange} />
            <input type = "text" placeholder="Enter location..." name="city" value = {state.city} onChange={handleChange} />
            <Button variant="primary" size="sm" type="submit">Submit</Button>
        </form>
        {/* search results here*/}
        <div id = "demo"></div>
        
        </div>
    )
}

export default Search
