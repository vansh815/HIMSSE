import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components/navbar";
import axios from 'axios'
import './Statistics.css'

const Statistics = () => {


    return (
        <div className="charts-container">
            <h1>Insurance Statistics</h1>
            <div className="charts">
                <img src="https://i.imgur.com/LtS1TUF.png" />
                <img src="https://i.imgur.com/6SzhC8y.png" />
            </div>
        </div>
    )
}

export default Statistics;