import React, {Component} from 'react'
import { Form, Row, Col, Container, Button, Jumbotron } from "react-bootstrap";

class SearchProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            speciality: "",
            location: "",
            date: "",
            time: ""
        };
    }

    handleChange = (event) => {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      alert("Date: " + this.state.date + 
      "\nTime: " + this.state.time);
    }

    /*componentDidMount() {
        var item = this.props.history.location.state.item;
        console.log(this.props.history.location.state.item);
        this.setState({
          firstname: item.firstname,
          lastname: item.lastname,
          speciality: item.speciality,
          location: item.location,
        });
      }*/
    render(){
        return (
            <Container>
              <Jumbotron style={{ backgroundColor: "#65aabf" }}>
                <Row>
                  <Col>
                    <h1>Profile Page</h1>
                    <p>
                      First Name : {this.state.firstname}
                      {""}
                      <br />
                      Last Name : {this.state.lastname}
                      {""}
                      <br />
                      Speciality : {this.state.speciality}
                      <br />
                      Location : {this.state.location}
                    </p>
                  </Col>

                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Row>
                          <Form.Label for="date">Date: </Form.Label>
                          <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                        </Row>
                        <br />
                        <Row>
                          <Form.Label for="time">Time: </Form.Label>
                          <Form.Control type="time" step="1800" name="time" value={this.state.time} onChange={this.handleChange} />
                        </Row>
                        <br />
                        <Button variant="dark" type="submit">Submit</Button>{' '}
                          
                      </Form.Group>
                    </Form>
          
                    <p>
                      <Button variant="dark">Book Appointment</Button>
                    </p>
                  </Col>
                </Row>
              </Jumbotron>
            </Container>
          );
        
      
    }
}
export default SearchProfile;