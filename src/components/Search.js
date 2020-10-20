import React, { Component } from 'react'

const Search = (props) => {
    const [state, setState] = React.useState({
        fname: '',
        lname: '',
        spec: '',
        loc: ''
      });

    const handleSubmit = (event) => {
        alert( state.fname + ' ' + state.lname + ' ' + state.spec + ' ' + state.loc);
        event.preventDefault();
        setState({fname:'',
                 lname: '',
                 spec:'',
                loc: ''});

    }
    
    const handleChange = (event) => {
        //fname.value += event.target.value.toLowerCase();   
        setState({
            ...state,
            [event.target.name]: event.target.value.toLowerCase()
        });
    }
    /*
    const lhandleChange = (event) =>{
        //lname.value += event.target.value.toLowerCase();
        setState({
            lname: event.target.value.toLowerCase()
        });
    }
    
    const lohandleChange = (event) => {
        setState({
            loc: event.target.value.toLowerCase()
        });
    }
    const shandleChange = (event) => {
        setState({
            spec: event.target.value.toLowerCase()
        });
    }*/
    /*
    const renamePlaceholder = (state) => {
        if state.fname =  

    }*/
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Enter first name" name="fname" value = {state.fname} onChange={handleChange} />
            <input type = "text" placeholder="Enter last name..." name="lname" value = {state.lname} onChange={handleChange} />
            <input type = "text" placeholder="Enter specialization..." name="spec" value = {state.spec} onChange={handleChange} />
            <input type = "text" placeholder="Enter location..." name="loc" value = {state.loc} onChange={handleChange} />
            <button type = "submit" value = "submit">Search</button> 
        </form>
    )
}

export default Search
