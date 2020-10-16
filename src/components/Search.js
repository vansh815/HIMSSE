
import React, { Component } from 'react'
class Search extends Component {
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
        return(<form onSubmit={this.handleSubmit}>
            <input type = "text" placeholder="Search..." name="search" value = {this.state.value} onChange={this.handleChange} />
            <button type = "submit" value = "submit">Search</button> 
        </form>)
    }
}

export default Search
