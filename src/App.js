import React from "react";
import Login from './components/Login';
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import ThirdPage from'./components/ThirdPage'
import { BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
         <Route path = "/" component={Login} exact/>  
         <Route path = "/signup" component={SignUp} exact/>  
        <Route path = "/password" component ={ForgotPassword} exact/>  
        <Route path = "/thirdpage" component ={ThirdPage} exact/>
      </div>
    </Router>
  );
}
export default App;




