import "./signup.css";
import React from "react"
import {Link} from "react-router-dom"
export default function SignUp() {
  const [allValues, setAllValues] = React.useState({
    fullname: '',
    phonenumber: '',
    username: '',
    password: '',

 });
 const changeHandler = e => {
  setAllValues({...allValues, [e.target.name]: e.target.value})
}
const handleSubmit=()=>{
  console.log(allValues)
  alert("Thank you for register")


}
  return (
    <div class = "container">
      <div class ="header">
        <h1>WeConnect</h1>
        <h2>SIGNUP</h2>
        </div>
      <form id = "signup" onSubmit={handleSubmit}>
        
    <div class ="inputs">
      
    <label>Name</label>
        <input  type="text" placeholder="Enter your name"  onChange={changeHandler}></input>
    
      
        <label>Phone</label>
        <input type="tel" placeholder="Enter your phone number" onChange={changeHandler}></input>
        
   
    <label>Email</label>
        <input type="text" placeholder="Enter your email"   onChange={changeHandler}></input>
   
    <label>Password</label>
        <input type="password" placeholder="Enter your password"   onChange={changeHandler}></input>
    </div>
    <div class ="checkboxy">
                    <input type="checkbox" id="agree" onChange={changeHandler}  />
                    <label class ="terms"> I agree to the <b>terms and privacy policy</b></label> 
     </div>   
           <div class = "button">SignUp</div>  
       
             
        <div class = "link" >Already have an account? <Link to="/" >Login</Link></div>
        </form>
    </div>
  );
}