import React, { Component } from "react";


//class component
export class XkcdPastComicContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                This past comic container data
            </div>
        )
    }
}

export default XkcdPastComicContainer

// Props and State trigger refreshes on the UI
 // this.props
    // const {locationURL} = this.props;
    // variables passed in from the parent

    // this.setState({var:value})
    // this.state.var OR const {var} = this.state;
    // class level variables -> children -> manipulated by children if you 
    // pass the children a function to do so
    // Example:
    // this.state = {
    //     counter: 0
    // }
    // <div>
    //     {this.state.counter}
    //     <CommonButton 
    //        onCLickAction={()=> this.setState({counter: counter + 1})} 
    //      />
    // </div>

    // lifecycle methods
    // component mount, unmount, update