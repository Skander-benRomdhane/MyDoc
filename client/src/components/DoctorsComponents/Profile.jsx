import React, { Component } from "react";
import Login from "./Login.jsx";
import Sign from "./Sign.jsx"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userId:this.props.userId
    };
  }
  render() {
    return(
      <div>
      <h1> my id is  :{this.state.userId}</h1>
      <Sign/>
      <Login/>
      </div>
    )
 
  }
}

export default Profile;
