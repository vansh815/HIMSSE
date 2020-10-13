import React, { Component } from 'react'
import Calendar from 'react-calendar'

class Dashboard extends Component {
    render() {
      let dataPie = {
        labels: ["40%", "20%", "40%"],
        series: [40, 20, 40]
      }
      let dataSales = {
        labels: [
          "9:00AM",
          "12:00AM",
          "3:00PM",
          "6:00PM",
          "9:00PM",
          "12:00PM",
          "3:00AM",
          "6:00AM"
        ],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695],
          [67, 152, 143, 240, 287, 335, 435, 437],
          [23, 113, 67, 108, 190, 239, 307, 308]
        ]
      }
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
                    <h4 className="card-title">TBD</h4>
                    <p className="card-category">TBD</p>
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