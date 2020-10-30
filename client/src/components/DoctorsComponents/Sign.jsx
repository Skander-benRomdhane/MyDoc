import React, { Component } from "react";
import DoctorHome from "./DoctorHome.jsx";
import Profile from "./Profile.jsx"
import axios from "axios";

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0 ,
      name: "",
      password: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      category: "",
      cabineName: "",
      urlCertificate: "",
      accountBanc: "",
      price: "",
    };
    this.addDoctor = this.addDoctor.bind(this);
  }
  componentDidMount() {
    this.setState({ 
      userId:0,
      name: "",
      password: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      category: "",
      cabineName: "",
      urlCertificate: "",
      accountBanc: "",
      price: "",
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
      accountBanc: this.state.accountBanc,
      price: this.state.price,
    };
    axios.post("http://localhost:3000/doctors/register", newDoctor)
      .then((res) => {
        console.log(res.data.id)
       this.setState({ 
        userId:res.data.id,
        name: "",
        password: "",
        email: "",
        address: "",
        city: "",
        phoneNumber: "",
        category: "",
        cabineName: "",
        urlCertificate: "",
        accountBanc: "",
        price: "",
      })
    })
   axios.post("http://localhost:3000/doctors/sendemail",newDoctor)
  }
  
  render() {
   if(this.state.userId === 0  ){
    return (
      <div>
        <center>
         <form onSubmit={(e)=>this.addDoctor(e)}> 
         <input type="text" placeholder="name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/><br></br>
         <input type="password" placeholder="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/><br></br>
         <input type="email" placeholder=" email" onChange={(e)=>this.setState({ email: e.target.value})} value={this.state. email}/><br></br>
         <input type="text" placeholder="address" onChange={(e)=>this.setState({address: e.target.value})} value={this.state.address}/><br></br>
         <input type="text" placeholder="city" onChange={(e)=>this.setState({city: e.target.value})} value={this.state.city}/><br></br>
         <input type="text" placeholder="phoneNumber" onChange={(e)=>this.setState({phoneNumber: e.target.value})} value={this.state.phoneNumber}/><br></br>
         <input type="text" placeholder="category" onChange={(e)=>this.setState({category: e.target.value})} value={this.state.category}/><br></br>
         <input type="text" placeholder="cabineName" onChange={(e)=>this.setState({cabineName: e.target.value})} value={this.state.cabineName}/><br></br>
         <input type="text" placeholder="urlCertificate" onChange={(e)=>this.setState({urlCertificate: e.target.value})} value={this.state.urlCertificate}/><br></br>
         <input type="text" placeholder="accountBanc" onChange={(e)=>this.setState({accountBanc: e.target.value})} value={this.state.accountBanc}/><br></br>
         <input type="text" placeholder="price" onChange={(e)=>this.setState({price: e.target.value})} value={this.state.price}/><br></br>
         <input type="submit" value="SignIn"  />
          </form>
        </center>
      </div>
    )
   }else if(this.state.userId !== 0){
     return (
       <div>
         <Profile userId={this.state.userId}/>
         
       </div>
     )
   }
     
  }     
}
export default Sign;
