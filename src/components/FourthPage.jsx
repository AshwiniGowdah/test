import React, { Component } from 'react';
import {Link} from "react-router-dom";
// // import "./thirdpage.css";
// import Data from "./Data"
// import Add from  "./Add"
import { FcVideoCall,FcPhone,FcSearch } from "react-icons/fc";
class FourthPage extends Component {
     constructor (props) {
        super(props);
        this.state = {
           
        }
     }

render(){
    return (
        <div className="container">
        <Add/>
        <div class = "button">End</div>    
        </div>
    );

 }

}
export default FourthPage;
   


