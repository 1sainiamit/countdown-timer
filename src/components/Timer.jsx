import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [timeInterval, setTimeInterval] = useState(null);

  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000)
    );
  };

  const pauseTimer = () => {
    clearInterval(timeInterval);
  };

  const resetTimer = () => {
    setTimer(25 * 60);
    clearInterval(timeInterval);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timeInterval);
    }
  }, [timer, timeInterval]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="bg-zinc-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Countdown Timer</h3>
        <div className="text-3xl font-bold mb-4">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            onClick={pauseTimer}
          >
            Pause
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
