import React, { useState, useEffect } from 'react';

function StartButton({ onStart }) {
  return (
    <button onClick={onStart}>
      Start
    </button>
  );
}

function PauseButton({ onPause }) {
  return (
    <button onClick={onPause}>
      Pause
    </button>
  );
}

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset}>
      Reset
    </button>
  );
}

export default function MyApp() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); 
      }, 10); 
    } else {
      clearInterval(interval); 
    }

    return () => clearInterval(interval); 
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  };

  const pauseTimer = () => {
    setTimerOn(false);
  };


  const resetTimer = () => {
    setTime(0);
  };

  return (
    <div>
      <h1>Stoper</h1>
      <h1>{(time / 100).toFixed(2)} s</h1>
      <StartButton onStart={startTimer} />
      <PauseButton onPause={pauseTimer} />
      <ResetButton onReset={resetTimer} />
    </div>
  );
}
