import React from "react";
import { useSelector } from "react-redux";

function Display_counter() {

  const counter = useSelector((store) => store.counter); // useselector used to get the value form store
  
  return <p className="lead mb-4">Counter Current Value : {counter}</p>;
}

export default Display_counter;
