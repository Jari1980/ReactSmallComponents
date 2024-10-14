import React, { useState } from "react";
import './Counter.css'

function Counter() {
  const [counter, SetCounter] = useState(0);

  function addCounter(){
    SetCounter(counter + 1)
  }

  function decreaseCounter(){
    SetCounter(counter - 1)
  }

  return (
    <>
    
      <div id="counterDiv">
        <h1 id="counterHeading">My Counter</h1>
        <h2 id="counterDisplay">{counter}</h2>
        <button id="button1" onClick={addCounter}>Press to increase</button>
        <button id="button2" onClick={decreaseCounter}>Press to decrease</button>
      </div>
    </>
  );
}

export default Counter;
