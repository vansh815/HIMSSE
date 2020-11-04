import React, { useState, useEffect } from "react";
import LandingPage from '../components/navbar/landing-page/LandingPage';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";

export const Home = () => { 
  const { user, getAccessTokenSilently , isAuthenticated} = useAuth0();
  const [userId, setUserId] = useState({});
  const [flag, setFlag] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if(isAuthenticated){
      const token = await getAccessTokenSilently();
      const response = await fetch(`${apiUrl}/user/details`, {method: "GET",headers: {Authorization: `Bearer ${token}`}
      
      }).then((response) => {
        return response.json()
        // if (!response.ok) {
        //   console.log("Public User") 
        //   history.push("/capture-details");
        // } else {
        //   return response.json()
        // }
      })
    .then((data) =>{
      console.log(data)
      if (!data){
        let path = "/profile"
        history.push(path)
      }
    })}})(user);
  },);
  
  
  return (
  <div className="landing">
    <LandingPage />
  </div>
  );
  };

export default Home;
