import React, { Component } from 'react';
import Messages from './Messages.jsx'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
           view:"profile"
        }
    }
  
    message(){
          this.setState({view:"messages"})
    }
    render() { 
      if(this.state.view==="messages"){
            return <Messages/>
        } else{
            return (
                <div>
            <ul>
  
  <li onClick={this.message.bind(this)}><a href="#news">Messages</a></li>
  <li className="dropdown">
    <a href="javascript:void(0)" className="dropbtn">Book an appointment</a>
    <div className="dropdown-content">
      <a href="#">Dentist</a>
      <a href="#">Psychologist</a>
      <a href="#">Ophthalmologist</a>
      <a href="#">Gastroenterologist</a>
    
    </div>
  </li>
</ul>
                   
                </div>
            );
        }
      
    }
}

export default Profile;