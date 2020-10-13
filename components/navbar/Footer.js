import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul className="footer-menu">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

            </ul>
            <p className="logo">
             Team 13
          </p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer