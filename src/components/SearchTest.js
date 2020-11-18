
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";
//import "./Search.css";
import React, { Component } from 'react'
class SearchTest extends Component{
    constructor(props){
      super(props);
      this.state = {
        users: [],
        first_name: '',
        last_name: '',
        speciality: '',
        city: ''
      };
    }
    //const token = getAccessTokenSilently();
     //history = useHistory();
    
      componentDidMount(){
        
      }

      
      
        callSecureApi = async (query) => {
          const { getAccessTokenSilently } = useAuth0();
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
      
      // getToken=async ()=>{
      //   const { getAccessTokenSilently } = useAuth0();

      //   getAccessTokenSilently.then((response)=>{
      //       console.log(response)
      //   }).catch(err=>console.log(err))
      // }
      handleRouteToProfile = (item) => {
        this.props.history.push({ pathname: "/profile", state: { item: item } });
      };
      handleSubmit=(event)=> 
      {
        let searchBox = document.getElementById("demo");
        searchBox.innerHTML = "";
          var fullSearch = this.state.first_name + ' ' + this.state.last_name + ' ' + this.state.speciality + ' ' + this.state.city;
          event.preventDefault();
          let query=  {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            speciality: this.state.speciality,
            city: this.state.city
          }
          const searchquery = this.callSecureApi(query);
          searchquery.then(result => { 
            result.data.map(
              res => {
              const newUser ={
                first_name: res.first_name,
                          last_name: res.last_name,
                          city: res.city,
                          specialization: res.speciality
              }
              this.state.users.push(newUser)
              console.log(newUser)
                // this.setState(prevState=>({
                //   users: [...prevState.users,newUser]
                // }));
              }
            )
            let data = result.data;
            console.log(result); 
            let len = data.length
            let searchCards = document.getElementById("demo");      
            let userResults = `<h1>Your search of ${fullSearch} returned ${len} results.</h1>`;
            searchCards.insertAdjacentHTML("afterbegin", userResults);
            /*data.map(res => {
                let resString = 
                `<div class="searchData" data-index="${res._id}">
                <Button variant = "link" onClick= ${clickProf()}>${res.first_name} ${res.last_name} - ${res.speciality} in ${res.city}</a>
                </div>`;

                searchCards.insertAdjacentHTML("beforeend", resString);0
              */  
            // document.getElementById("demo").innerHTML = text; 
           })
          .catch(error => { console.error(error); })
  
          this.setState({first_name:'',
                   last_name: '',
                   speciality:'',
                  city: ''});        
      }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
   render(){
    return (
      <div class= "searchResults">
        <form onSubmit={this.handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="first_name" value = {this.state.first_name} onChange={this.handleChange} />
            <input type = "text" placeholder="Enter last name..." name="last_name" value = {this.state.last_name} onChange={this.handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="speciality" value = {this.state.speciality} onChange={this.handleChange} />
            <input type = "text" placeholder="Enter location..." name="city" value = {this.state.city} onChange={this.handleChange} />
            <Button variant="primary" size="sm" type="submit">Submit</Button>
        </form>
        <div id = "demo"></div>
        {this.state.users.map((item, index) => (
          <div id={index}>
            <Card
              style={{ width: "25rem", display: "flex", flexDirection: "row" }}
            >
              <Card.Img
                variant="left"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  height: "50%",
                }}
                src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  {item.firstname} {item.lastname}
                </Card.Title>
                <Card.Text> {item.speciality}</Card.Text>
                <Card.Text> {item.location}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.handleRouteToProfile(item)}
                >
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        </div>
    )}
}

export default SearchTest
