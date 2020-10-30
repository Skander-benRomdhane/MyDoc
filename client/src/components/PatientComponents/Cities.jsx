import React,{Component} from 'react'
<<<<<<< HEAD
class Cities extends Component {
    constructor(props){
        super(props)

    }
    render() { 
        console.log(this.props,"city")
        return (
            <div>
                <label htmlFor="city"> {this.props.city}</label><br></br>
        <input type="checkbox" name="city" ></input> 
=======
import Axios from "axios"
class Cities extends Component {
    constructor(props){
        super(props)
        this.state={
             docType:this.props.type,
            city:this.props.state,
            docs:[]
        }
       
    }
    componentDidMount(){
        //         this component will make a post request to the database then filter and render the doctors that match the elements of the state
    
         var {docType,city}=this.state
      
              Axios
               .post("http://localhost:3000/doctors/docstate",{docType,city})
               .then(res=>{
                   this.setState({
                   docs:res.data,
                   
               })})
               //set the state with the res
               .catch(err=>{throw err})
        }

    render() { 
        console.log(this.state)
        return (
            <div>
               <h1>heyy</h1>
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387
            </div>
        
            );
    }
}
 
export default Cities