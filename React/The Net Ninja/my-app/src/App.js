import React, {Component} from 'react';
import User from "./User";
import AddUser from "./AddUser";

class App extends Component {
  state = {
    users : [
      { name: "Amr", age: "22", club: "ZSC", id: 1},
      { name: "Emma", age: "25", club: "RMD", id: 2},
      { name: "Sara", age: "34", club: "BFC", id: 3}
    ]
  };
  addUser = (user) => {
    user.id = this.state.users.length +1;
    let users = [...this.state.users,user];
    this.setState({
      users: users
    })
  }
  deleteUser = (id) => {
    let users = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: users
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to our React App</h1>
          <p>Smile you're beautiful</p>
          <User  users = {this.state.users} deleteUser = {this.deleteUser}/>
          <AddUser addUser = {this.addUser}/>
        </header>
      </div>
    ); 
  }
}

export default App;
