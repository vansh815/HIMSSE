import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
 
      <footer className="page-footer font-small">
        
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://health-insurance123.herokuapp.com/"> HIMS Home</a>
        </div>
       
      </footer>
      

      
    )
  }
}

export default Footer