import React from "react";
import DoctorHome from "./DoctorsComponents/DoctorHome.jsx";
import PatientHome from "./PatientComponents/PatientHome.jsx";

class App extends React.Component {
  constructor() {
    super();
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
              <button className="btn" value="Doctor" onClick={this.changeView}>
                Doctor
              </button>
              <button className="btn" value="Patient" onClick={this.changeView}>
                Patient
              </button>
            </center>
            <center>
              <p>Hello</p>
            </center>
          </div>
        </div>
      );
    } else if (this.state.view === "Doctor") {
      return <DoctorHome />;
    } else if (this.state.view === "Patient") {
      return <PatientHome />;
    }
  }
}

export default App;
