import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import SearchProfile from "../SearchProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const MainNav = () => ( 
  <div>
    <Nav className="mr-auto">
      <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Home
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/profile"
        exact
        activeClassName="router-link-exact-active"
      >
        Profile
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/external-api"
        exact
        activeClassName="router-link-exact-active"
      >  
        Appointments
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/dashboard"
        exact
        activeClassName="router-link-exact-active"
      >
        Dashboard
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/SearchProfile"
        exact
        activeClassName="router-link-exact-active"
      >
        Search
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/stats"
        exact
        activeClassName="router-link-exact-active"
      >
        Statistics
      </Nav.Link>
    </Nav>
    <Switch>
          <Route path="/SearchProfile">
            <SearchProfile />
          </Route>
        </Switch>
    </div>
  );
  
  const AuthNav = () => {
   const { isAuthenticated } = useAuth0();
  
   return (
     <Nav className="justify-content-end">
       {isAuthenticated ? <LogoutButton /> : <LoginButton />}
     </Nav>
   );
  };
  
  const NavBar = () => {
    return (
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
          <MainNav />
          <AuthNav />
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
