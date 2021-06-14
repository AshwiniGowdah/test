import React, { useState } from "react";
import "./add.css"
function Add() {
  function add() {
    setAddNew([...addNew], <NewUser />);
  }
  const [addNew, setAddNew] = useState([]);
 

const NewUser = () => {
  return (
    <p><div>New User </div></p>
  );
};

return (   
           <div class = "button">
              <div onClick={add}>Add User </div>
              {addNew} 
           </div>

);
}

export default Add;





