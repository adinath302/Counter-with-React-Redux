import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" }); // dispatch action to reducer
  };

  // action was dispatched to reducer with type and payload
  const add = () => {
    dispatch({
      type: "ADD",
      payload: {
        Number: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const Substract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        Number: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={increment}>
          +1
        </button>
        <button type="button" className="btn btn-success" onClick={decrement}>
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="number-input"
          placeholder="Enter Number"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={add}>
          Add
        </button>

        <button type="button" className="btn btn-danger" onClick={Substract}>
          Substract
        </button>
      </div>
    </>
  );
}

export default Controls;
