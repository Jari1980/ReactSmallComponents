import { useState } from "react";
import './Timer.css'

function Timer() {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(0);
  const [play, setPlay] = useState(true);

  const start = () => {
    setPlay(!play);
    setTimeInterval(
      setInterval(() => {
        setTimer((old) => old + 1);
      }, 1000)
    );
  };
  const pause = () => {
    setPlay(!play);
    clearInterval(timeInterval);
  };
  const reset = () => {
    setTimer(0);
  };

  return (
    <>
      <div id="timerDiv">
        <h1 id="timerH">Timer</h1>
        <div id="timerContent">
          <p id="timerP">{timer}</p>
          <div id="startPause">
            {play && <button id="startB" onClick={start}>Start</button>}
            {!play && <button id="pauseB" onClick={pause}>Pause</button>}
          </div>
        </div>
        <span id="resetTimer">{timer > 0 && <button id="resetB" onClick={reset}>Reset</button>}</span>
      </div>
    </>
  );
}

export default Timer;
