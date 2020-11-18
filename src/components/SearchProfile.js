import React, {Component} from 'react'
import { Form, Row, Col, Container, Button, Jumbotron } from "react-bootstrap";

class SearchProfile extends Component {
    constructor(props){
        super(props);
        
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
/*
function SearchProfile(props) {
  const { user, isLoading } = useAuth0();
  console.log(props);
  const location = useLocation();

  useEffect(() => {
    console.log(location); // result: '/secondpage'
    //console.log(location.search); // result: '?query=abc'
    console.log(location.state.details); // result: 'some_value'
  }, [location]);
  return (
    <div>
      <Jumbotron>
        <h1>Profile of {location.state.details.first_name} {location.state.details.last_name}</h1>
        <p>
          Speciality : {location.state.details.speciality}
          <br/>
          City : {location.state.details.city}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default SearchProfile;
*/
export default SearchProfile;