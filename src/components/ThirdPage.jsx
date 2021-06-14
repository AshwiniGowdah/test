import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./thirdpage.css";
import Data from "./Data"
import Add from  "./Add"
import { FcVideoCall,FcPhone,FcSearch } from "react-icons/fc";
class ThirdPage extends Component {
     constructor (props) {
        super(props);
        this.state = {
            data: Data
        }
     }
    onchange = e =>{
        this.setState({ search : e.target.value });
        e.preventDefault();
    }

 render() {
    return (
        <div class="container">
        <form id = "thirdpage" onSubmit={e => e.preventDefault()}>
                
                    <h1><div class = "header">WeConnect <Add/> </div></h1><br/>
                    <div class ="button__icon1, button__icon1"> <FcSearch/>         
                < input  placeholder = "Type User" label="Search" icon="search" onChange={this.onchange} >
                </input>
                
                </div>

                <div class = "input">
                
                    { this.state.data.map((DynamicData,i) =>
                         <div class = "input">
                           <span >{DynamicData.name} </span>
                            <span>{DynamicData.dateandtime}</span>   
                            <div class =" button__icon, button__icon"><FcVideoCall/></div> 
                            <div class =" button__icon, button__icon">< FcPhone/></div>                     
                            
                        </div>
                     )
                     }                     
               
               </div> <br/> 
                 <div class = "text" >Copyright © 2021</div>
                 <div class ="link1"><Link to="/thirdpage" >About</Link></div>
                <div class= "link2"><Link to="/fourthpage" >fourthpage</Link></div>
            </form>
            </div>
             
                   
        );
    }
}

export default ThirdPage;
