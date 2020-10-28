import React, { Component } from 'react';

class ConfirmAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
               <input type="text" placeholder="sex"></input> <br></br>
               <input type="text" placeholder="blood type"></input> <br></br>
               <input type="text" placeholder="primary diagnosis "></input>
               <br></br>
               <button>Confirm</button>
            </div>
        );
    }
}

export default ConfirmAppointment;