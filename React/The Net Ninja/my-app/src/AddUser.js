import React, { Component } from "react";

class AddUser extends Component{
  state = {
    name: null,
    age: null,
    club: null
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "name">Name</label>
          <input type="text" id="name" onChange ={this.handleChange}/>
          <br/>
          <label htmlFor = "age">Age</label>
          <input type="text" id="age" onChange ={this.handleChange}/>
          <br/>
          <label htmlFor = "club">CLub</label>
          <input type="text" id="club" onChange ={this.handleChange}/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  };
}

export default AddUser;