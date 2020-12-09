import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, Footer, Loading, PrivateRoute } from "./components/navbar";
import Header from "./components/navbar/landing-page/Header";
import { Home, Profile, ExternalApi, UpcomingAppointments, Statistics } from "./views";
//import UpcomingAppointments from './views';
import Dashboard from './components/Dashboard'
import UserForm from './views/UserForm'
import "./App.css";
import SearchProfile from "./components/SearchProfile";
import Chat from "./views/chat/Chat.js";
import Stats from "./views/Statistics.js";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Header />
      <div className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/profile" component={UserForm} />
          
          <PrivateRoute path="/external-api" component={UpcomingAppointments} />
          <PrivateRoute path="/chat" component={Chat}/>
          <PrivateRoute path="/stats" component={Stats} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
