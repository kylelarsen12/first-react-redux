//imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, customAmount } from "./features/counterSlice";

function Counter() {
  //Call useSelector to obtain state value from store and reassign
  const count = useSelector((state) => state.counter.value);
  //include useDispatch hook
  const dispatch = useDispatch();

  const [input, setInput] = useState(0);

  const customAmountSubmit = (e) => {
    e.preventDefault();
    dispatch(customAmount(Number(input)));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <form
        onSubmit={(e) => {
          customAmountSubmit(e);
        }}
      >
        <input
          type="number"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button type="submit">Add Custom Amount</button>
      </form>
    </div>
  );
}

export default Counter;
