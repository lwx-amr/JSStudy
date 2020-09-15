import React from "react";
import Rainbow from "../hoc/Rainbow";

const Contacts = () =>{
  return (
    <div className="container">
      <h4>Contacts</h4>
      <p>Welcome to the Contacts page</p>
    </div>
  );
}

export default Rainbow(Contacts);