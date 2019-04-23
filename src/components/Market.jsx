import React from "react";

function Market(props){

  
  
  return (
    <div>
      
      <h2>{props.day}</h2>
      <h4>{props.location}</h4>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

export default Market;