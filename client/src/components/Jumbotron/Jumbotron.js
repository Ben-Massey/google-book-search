import React from "react";
import "./style.css"


const Jumbotron = ({children})=>(
<div className="jumbotron" id = "jumbo">
  <h1 className="display-4">React Book Search</h1>
  {children}
</div>
);

export default Jumbotron;