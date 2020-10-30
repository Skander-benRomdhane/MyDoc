import React, { Component } from 'react';
import Messages from './Messages.jsx';
import State from './State.jsx';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
           view:"profile",
           type:"",           
           id:this.props.profileInfo.userId
        }
        this.changeToStateTypeD = this.changeToStateTypeD.bind(this);
        this.changeToStateTypeP = this.changeToStateTypeP.bind(this);
        this.changeToStateTypeO = this.changeToStateTypeO.bind(this);
        this.changeToStateTypeG = this.changeToStateTypeG.bind(this);

    }

    changeToStateTypeD (e) {
      this.setState({
        type: e.currentTarget.innerHTML ,
        view: 'state'
        
      })

      console.log(this.state.type)
    }
    changeToStateTypeP () {
      this.setState({
        view: 'state',
        type :'psychologist',
      })
    }
    changeToStateTypeO () {
      this.setState({
        view: 'state',
        type :'ophthalmologist',
      })
      console.log(this.state.type);
    }
    changeToStateTypeG () {
      this.setState({
        view: 'state',
        type :'gastroenterologist',
      })
    }
    message(){
          this.setState({view:"messages"})
    }
    render() { 
      if(this.state.view==="messages"){
            return <Messages/>
        }
        else if (this.state.view === 'state') {
          return <State type={this.state.type} />
        }
         else{
            return (
<div>
  <ul>
    <li onClick={this.message.bind(this)}><a href="#news">Messages</a></li>
     <li className="dropdown">
      <a href="javascript:void(0)" className="dropbtn">Book an appointment</a>
      <div className="dropdown-content">
      <a  onClick = {this.changeToStateTypeD}  >Dentist</a>
      <a onClick = {this.changeToStateTypeP}>Psychologist</a>
      <a onClick = {this.changeToStateTypeO}>Ophthalmologist</a>
      <a onClick = {this.changeToStateTypeG}>Gastroenterologist</a>
    </div>
    </li>
 </ul>
</div>
            );
        }
      
    }
}

export default Profile;