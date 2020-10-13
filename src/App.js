import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, Footer, Loading, PrivateRoute } from "./components/navbar";
import { Home, Profile, ExternalApi } from "./views";
import Main from './components/Main'

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="flex-grow-1 mt-5">
        <Switch>
        <Route path="/" exact component={Home} />
          <PrivateRoute path="/dashboard" component={Main} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;