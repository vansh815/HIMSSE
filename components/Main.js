import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Footer from './navbar/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'
import Header from './navbar/landing-page/Header'

function Main() {
    //render() {
        return (
        <div className="main-panel">
            <Header />
            <Navbar />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={UserProfile} />
                <Redirect from='*' to='/dashboard' />
            </Switch>
            <Footer />
        </div>
        )
    //}
}

export default Main
