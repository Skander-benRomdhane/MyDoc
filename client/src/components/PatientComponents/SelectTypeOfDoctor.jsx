import React, { Component } from 'react';
import BookAnAppointment from "./BookAnAppointment.jsx"
class SelectTypeOfDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"",
            
        }
    }
    checkbox(){
        var con=document.getElementById("container")
        var checkboxes= con.getElementsByTagName("input")
        var doc=""

        for( var i = 0; i < checkboxes.length; i++ ){
            if(checkboxes[i].checked){
             doc=checkboxes[i].name
            }
          }
          this.setState({ type:doc })
        }
        
    
    
    render() {
      
        if(this.state.type.length){
            return <BookAnAppointment types={this.state.type}/>
        }else{
            return (
           
                <div id="container">
                    <input type="checkbox" name="Psychologist"></input>
                    <label htmlFor="Psychologist">Psychologist</label> <br></br>
                    <input type="checkbox" name="Ophthalmologist"></input>
                    <label htmlFor="Ophthalmologist">Ophthalmologist</label><br></br>
                    <input type="checkbox" name="Gastroenterologist"></input>
                    <label htmlFor="Gastroenterologist">Gastroenterologist</label><br></br>
                    <input type="checkbox" name="Dentist"></input>
                    <label htmlFor="Dentist">Dentist</label><br></br>
                    <button onClick={this.checkbox.bind(this)}>search</button>
                </div>
            );

        }
      
    }
}

export default SelectTypeOfDoctor;