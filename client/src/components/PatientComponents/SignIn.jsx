import React, { Component } from "react";
import PatientHome from "./PatientHome.jsx";

class SignIn extends Component {
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
            <input
              type="text"
              id="fisrrname"
              placeholder="Firstname"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input
              type="text"
              id="Lastname"
              placeholder="Lastname"
              onChange={this.handleChange.bind(this)}
            />
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
            <input
              type="repeatpassword"
              id="repeatpassword"
              placeholder="repeatpassword"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input type="button" value="signin" onClick={this.changeView} />
          </center>
        </div>
      );
    } else if (this.state.view === "signin") {
      return <PatientHome />;
    }
  }
}
export default SignIn;
