import React, { Component } from 'react';
import Axios from "axios"
import Cities from "./Cities.jsx";
import data from './data.jsx'
class BookAnAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docType:this.props.types,
            doctors:data
        }
    }

   
    render() {
      const data = this.state.doctors
      return (
            <div>
                {
                  this.state.doctors.map((e,i)=>
                  <div key={i}>
                  <label htmlFor="city"> {e.city}</label><br></br>
                     <input type="checkbox" name="city" >{e.city}</input> 
                  </div>
                  )
                }
            </div>
        );
    }
}

export default BookAnAppointment;