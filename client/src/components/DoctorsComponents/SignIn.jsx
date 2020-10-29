import React, { Component } from "react";
import DoctorHome from "./DoctorHome.jsx";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      category: "",
      cabineName: "",
      urlCertificate: "",
      Patients: "",
      accountBanc: "",
      price: "",
      view: "",
    };
    this.addDoctor = this.addDoctor.bind(this);
  }
  componentDidMount() {
    this.setState({ 
      name: "",
      password: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      category: "",
      cabineName: "",
      urlCertificate: "",
      Patients: "",
      accountBanc: "",
      price: "",
      view: "",
    })
  }

  
  addDoctor(e) {
    e.preventDefault();
    const newDoctor = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      phoneNumber: this.state.phoneNumber,
      category: this.state.category,
      cabineName: this.state.cabineName,
      urlCertificate: this.state.urlCertificate,
      Patients: this.state.Patients,
      accountBanc: this.state.accountBanc,
      price: this.state.price,
    };
    axios.post("http://localhost:3000/doctors/register", newDoctor)
      .then(() => this.componentDidMount());
   axios.post("http://localhost:3000/doctors/sendemail",newDoctor)
      .then(() => this.componentDidMount());
  }
  
  render() {
    if (this.state.view === "") {
      return (
        <div>
          <center>
           <form onSubmit={(e)=>this.addDoctor(e)}> 
           <input type="text" placeholder="name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/><br></br>
           <input type="text" placeholder="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/><br></br>
           <input type="text" placeholder=" email" onChange={(e)=>this.setState({ email: e.target.value})} value={this.state. email}/><br></br>
           <input type="text" placeholder="address" onChange={(e)=>this.setState({address: e.target.value})} value={this.state.address}/><br></br>
           <input type="text" placeholder="city" onChange={(e)=>this.setState({city: e.target.value})} value={this.state.city}/><br></br>
           <input type="text" placeholder="phoneNumber" onChange={(e)=>this.setState({phoneNumber: e.target.value})} value={this.state.phoneNumber}/><br></br>
           <input type="text" placeholder="category" onChange={(e)=>this.setState({category: e.target.value})} value={this.state.category}/><br></br>
           <input type="text" placeholder="cabineName" onChange={(e)=>this.setState({cabineName: e.target.value})} value={this.state.cabineName}/><br></br>
           <input type="text" placeholder="urlCertificate" onChange={(e)=>this.setState({urlCertificate: e.target.value})} value={this.state.urlCertificate}/><br></br>
           <input type="text" placeholder="Patients" onChange={(e)=>this.setState({Patients: e.target.value})} value={this.state.Patients}/><br></br>
           <input type="text" placeholder="accountBanc" onChange={(e)=>this.setState({accountBanc: e.target.value})} value={this.state.accountBanc}/><br></br>
           <input type="text" placeholder="price" onChange={(e)=>this.setState({price: e.target.value})} value={this.state.price}/><br></br>
           <input type="submit" value="SignIn" onChange={(e)=>this.setState({view:this.state.view = "signin"})} />
            </form>
          </center>
        </div>
      );
    } else if (this.state.view === "signin") {
      return(
      <div>
      <DoctorHome />
      </div> 
      )
    }
  }
}
export default SignIn;
