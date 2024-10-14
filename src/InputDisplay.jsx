import React, { useState } from "react";
import './InputDisplay.css'

function InputDisplay() {
    const [text, SetText] = useState("")

    function resetText(){
        SetText("")
    }

  return (
    <>
      <div id="inputDisplayDiv">
        <h1>Write something in the input field</h1>
        <input value={text} onChange={e => SetText(e.target.value)}></input>
        <p>{text}</p>
        <button onClick={resetText}>Reset input</button>
      </div>
    </>
  );
}

export default InputDisplay;
