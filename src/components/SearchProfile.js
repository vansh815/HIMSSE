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
        };

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
              <Jumbotron style={{ backgroundColor: "#E6E6FA" }}>
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
      
                <p>
                  <Button variant="info">Book Appointment</Button>
                </p>
              </Jumbotron>
            </Container>
          );
        
      
    }
}
export default SearchProfile;