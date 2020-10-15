import React, { Component } from 'react'
import Calendar from 'react-calendar'

class Dashboard extends Component {
    render() {
      
      return (
        <div className="content">
          <div className="container-fluid">
            <div className="row">
  
              <div className="col-md-4">
                <div className="card ">
                  <div className="card-header ">
                    <h4 className="card-title">Calendar</h4>
                    <p className="card-category">Upcoming Appointments</p>
                  </div>
                  <div className="card-body ">
                    <Calendar />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header ">
                    <form action = "">
                      <input type = "text" placeholder="Search..." name="search"></input>
                        <button type = "submit">Search</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Dashboard