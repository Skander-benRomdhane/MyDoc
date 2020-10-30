import React, { Component } from 'react';
import Axios from "axios"
import Cities from "./Cities.jsx"
class BookAnAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docType:this.props.types,
            doctors:[],
            city:"",
            
        }
    }
    checkbox(){
        var con=document.getElementById("container")
        var checkboxes= con.getElementsByTagName("input")
        var state=""

        for( var i = 0; i < checkboxes.length; i++ ){
            if(checkboxes[i].checked){
             state=checkboxes[i].name
            }
            
          }
           this.setState({ city:state})
        }
        
    componentDidMount(){
    //         this component will make a post request to the database then filter and render the doctors that match the elements of the state

     var {docType}=this.state
  
          Axios
           .post("http://localhost:3000/doctors/doctypes",{docType})
           .then(res=>{
               this.setState({
               doctors:res.data,
               
           })})
           //set the state with the res
           .catch(err=>{throw err})
    }
   
    render() {
        console.log(this.state)
        if(this.state.city){
            return <Cities state={this.state.city} type={this.state.docType} />
        } else{
            return (
                <div>
                 <div id="container">
                        <input type="checkbox" name="Mehdia"></input>
                        <label htmlFor="Mehdia">Mehdia</label> <br></br>
                        <input type="checkbox" name="Sousse"></input>
                        <label htmlFor="Sousse">Sousse</label><br></br>
                        <input type="checkbox" name="kairouan"></input>
                        <label htmlFor="kairouan">kairouan</label><br></br>
                        <input type="checkbox" name="Tunisia"></input>
                        <label htmlFor="Tunisia">Tunisia</label><br></br>
                        <button onClick={this.checkbox.bind(this)}>search</button>
                    </div>
                </div>
            )

        }
        
    }
}

export default BookAnAppointment;