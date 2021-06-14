import React from 'react';
import {Link} from "react-router-dom";
import "./login.css";
export default function Login() {
    const [allValues, setAllValues] = React.useState({
          username: '',
          password: '',
  
   });
   const changeHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }
  const handleSubmit=()=>{
    console.log(allValues)
    if(this.state.username === this.state.password){
        alert("Login successfully")
      }
      else {
        alert("Enter correct username or password");
      }
  }
return (
      <div class ="container">
        <div class ="header">
        <h1>WeConnect</h1>
       <h2>LOGIN</h2>
       </div>
       <form id = "login" onSubmit={handleSubmit}>

       <div class ="input">
        <label>Email</label>
            <input type="text" placeholder="Enter your email" onChange={changeHandler}></input>
        
        <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={changeHandler}></input>

        </div>
         
        <div class = "button">Login </div>


        <div class = "link1">
           <label class ="terms"> New to WeConnect? </label> <Link to  ="/signup" >SignUp</Link></div>
           <div class = "link2"><Link to="/password">Forgot Password?</Link></div>
           <div class = "link3"> <Link to="/thirdpage" >AddUserList</Link> </div>
        </form>
      </div>
    );
  }
