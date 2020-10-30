import React, { Component } from 'react';
import Messages from './Messages.jsx';
<<<<<<< HEAD
import State from './State.jsx';
import axios from 'axios';

=======
import SelectTypeOfDoctor from "./SelectTypeOfDoctor.jsx"
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          book:false,
           view:"profile",
<<<<<<< HEAD
           type:"",           
           id:this.props.profileInfo.userId
=======
           name:this.props.name,
           email:this.props.email,
           address:this.props.address,
           city:this.props.city,
           phoneNumber:this.props.phoneNumber
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387
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
<<<<<<< HEAD
=======
   
  book(){
    this.setState({book:!this.state.book})
  }
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387
    message(){
          this.setState({ view:"messages"})
    }
    render() { 
      console.log(this.state)
      if(this.state.view==="messages"){
            return <Messages/>
<<<<<<< HEAD
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
=======
        } if(this.state.book===true){
              return <SelectTypeOfDoctor/>
        }else{
            return (
                <div >
            <ul>
  <li className="userName">     {this.state.name}                  </li>
  <li onClick={this.message.bind(this)}><a href="#news">Messages</a></li>
  <li className="dropdown">
    <a href="#" className="dropbtn" onClick={this.book.bind(this)} >Book an appointment</a>
    
  </li>
</ul>
            <div> email: {this.state.email}</div>
            <div> address :{this.state.address}</div>   
            <div> city : {this.state.city}</div>        
            <div> phone Number {this.state.phoneNumber}</div>   
                </div>
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387
            );
        }
      
    }
}

export default Profile;