import React, { Component } from "react";
import Profile from "./Profile.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      users: [],
      view: "main",
      Data: [],
    };
    this.changeView = this.changeView.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  changeView(e) {
    this.setState({ view: e.target.value });
  }
   

  
  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <center>
            <p>Doctor's Login</p>
            <br></br> <br></br>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input type="button" value="Login" onClick={this.changeView} />
          </center>
        </div>
      );
    } else if (this.state.view === "Login") {
      return <Profile />;
    }
  }
}

export default Login;
