import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userId:this.props.userId
    };
  }
  render() {
   return (
   <div>
   <h1> hello profile </h1>
   </div>
  ) 
  }
}

export default Profile;
