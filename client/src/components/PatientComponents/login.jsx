import React, { Component } from "react";
import Profile from "./Profile.jsx";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      view: "",
      id: 0,
    }
    this.login=this.login.bind(this);
  }
  componentDidMount(){
    this.setState({
      email:"",
      password:"",
      view: "",
      id: 0 ,
    })
  }
  login(e){
    e.preventDefault();
    const patient = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/patients/login', patient).then((res,req)=>{
      const token = res.headers.auth_token
      localStorage.setItem('auth_token', token)
      localStorage.getItem('auth_token')
      this.setState({
        email:"",
        password:"",
        view: "profile",
        id: res.data.id
      })
    })
  }
  render() {
    if (this.state.view === "" && this.state.id === 0) {
      return (
        <div>
          <center>
          <p>Patient Login</p>
            <br></br> <br></br>
           <form onSubmit={(e)=>this.login(e)}>
             <input type="text" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/><br></br> <br></br>
             <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}/><br></br> <br></br>
             <input type="submit" value="Log In" /><br></br> <br></br>
           </form>
          </center>
        </div>
      );
    } else if (this.state.view === "profile" && this.state.id !== 0 ) {
      return <Profile userId={this.state.id}/>;
    }
  }
}

export default Login;
