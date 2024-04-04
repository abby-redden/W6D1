import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startStopwatch, stopStopwatch, resetStopwatch, tick } from '../redux/actions';
import "./stopwatch.css";

const Stopwatch = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time);
    const isRunning = useSelector(state => state.isRunning);
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => dispatch(tick()), 10);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, dispatch]);
  
    const toggleRunning = () => {
      dispatch(isRunning ? stopStopwatch() : startStopwatch());
    };
  
    const reset = () => {
      dispatch(resetStopwatch());
    };
  
    const formatTimeUnit = (unit) => {
      return unit.toString().padStart(2, "0");
    };
  
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
  
    return (
      <div className="stopwatch-container">
        <p className="stopwatch-time">
          {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
          {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
        </p>
        <div className="stopwatch-buttons">
          <button className="stopwatch-button" onClick={toggleRunning}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="stopwatch-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  export default Stopwatch;