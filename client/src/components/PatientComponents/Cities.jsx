import React,{Component} from 'react'
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
            </div>
        
            );
    }
}
 
export default Cities