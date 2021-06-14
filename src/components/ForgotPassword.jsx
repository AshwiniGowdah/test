import React from 'react';
import {Link} from "react-router-dom"
import "./forgotpassword.css"
export default function ForgotPassword() {
    const [allValues, setAllValues] = React.useState({
      username: '',
   });
   const changeHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }
  const handleSubmit=()=>{
    console.log(allValues)
    alert("Password is correct")
}
return (
    <div class="container">
         <div class ="header">
            <h1>WeConnect</h1>
            <h2>Forgot Password</h2>
        </div>
        <form id = "password" onSubmit={handleSubmit}>
        <div class="inputo">
        <label>Email</label>
            <input type="text" placeholder="Enter your email" onChange={changeHandler}></input>
        </div>
        <div class="button">Submit</div>
               <div class = "link">
                <Link to="/">Login</Link>
            </div>
        </form>
    </div>
);
}
