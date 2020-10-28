import React, { Component } from "react";
import Login from "./Login.jsx";
import SignIn from "./signIn.jsx";

class DoctorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "main",
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ view: e.target.value });
  }

  render() {
    if (this.state.view === "main") {
      return (
        <div className="bg">
          <div>
            <center>
              <button className="btn" value="login" onClick={this.changeView}>
                Login
              </button>
              <button className="btn" value="SignIn" onClick={this.changeView}>
                SignIn
              </button>
            </center>
            <center>
              <p>Hello</p>
            </center>
          </div>
        </div>
      );
    } else if (this.state.view === "login") {
      return <Login />;
    } else if (this.state.view === "SignIn") {
      return <SignIn />;
    }
  }
}
export default DoctorHome;
