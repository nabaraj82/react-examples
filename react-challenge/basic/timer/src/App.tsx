import React, { useEffect } from "react";
import "./App.css";
const App = () => {
  const [timer, setTimer] = React.useState({
    hrs: 0,
    min: 0,
    sec: 0,
    start: false,
    enableInput: false,
  });

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const shouldStop = timer.hrs === 0 && timer.min === 0 && timer.sec === 0;
    if (timer.start && !shouldStop) {
      intervalId = setInterval(() => {
        setTimer((prevState) => {
          const { hrs, sec, min } = prevState;
          if (sec > 0) {
            return {
              ...prevState,
              sec: sec - 1,
            };
          } else if (sec === 0 && min > 0) {
            return {
              ...prevState,
              sec: 60,
              min: min - 1,
            };
          } else if (min === 0 && hrs > 0) {
            return {
              ...prevState,
              sec: 60,
              min: 60,
              hrs: hrs-1,
            };
          } else {
            return {
              ...prevState,
              start: false
            };
          }
        });
      }, 1000);
    } else {
      setTimer((prevState) => ({ ...prevState, start: false }));
    }
    return () => clearInterval(intervalId);
  }, [timer.start]);

  const formatTime = (value: number) => {
    return String(value).padStart(2, "0");
  };

  const handleStart = () => {
    setTimer((prevState) => ({
      ...prevState,
      enableInput: false,
      start: !prevState.start,
    }));
  };

  const handleReset = () => {
    setTimer(() => ({
      hrs: 0,
      min: 0,
      sec: 0,
      start: false,
      enableInput: false,
    }));
  };

  const handleTimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimer((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <div className="timer">
        {timer.enableInput ? (
          <span className="input-container">
            <input
              type="number"
              name="hrs"
              value={timer.hrs}
              onChange={handleTimerChange}
            />
            :
            <input
              type="number"
              name="min"
              value={timer.min}
              onChange={handleTimerChange}
            />{" "}
            :
            <input
              type="number"
              name="sec"
              value={timer.sec}
              onChange={handleTimerChange}
            />{" "}
          </span>
        ) : (
          <button
            onClick={() =>
              setTimer((prevState) => ({ ...prevState, enableInput: true }))
            }
          >
            <span>{`${formatTime(timer.hrs)}: ${formatTime(
              timer.min
            )}: ${formatTime(timer.sec)}`}</span>
          </button>
        )}
      </div>
      <div className="timer-actions">
        <button onClick={handleStart}>{timer.start ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Rest</button>
      </div>
    </div>
  );
};

export default App;
