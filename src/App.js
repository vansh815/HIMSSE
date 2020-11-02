import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, Footer, Loading, PrivateRoute } from "./components/navbar";
import Header from "./components/navbar/landing-page/Header";
import { Home, Profile, ExternalApi } from "./views";
import Dashboard from './components/Dashboard'
import UserForm from './views/UserForm'
import "./App.css";

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
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;