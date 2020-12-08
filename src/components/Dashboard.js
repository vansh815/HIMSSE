import React, { Component } from 'react'
import Calendar from './Calendar'
import Search2 from './Search2'
import GoogleMap from './Map'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({value: ''});
  }
  handleChange(event) {
    this.setState({value: event.target.value.toLowerCase()});
  }
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
                <div className="calendar-container">
                  <Calendar />
                  <GoogleMap zoomLevel={13} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <Search2 />
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
