import { Button } from "@material-tailwind/react";
import React, { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import Login from "./Login";
import { Authcontext } from "./AuthProvider";

const Home = () => {
  const [stopwatch, setStopwatch] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const { user } = useContext(Authcontext);

  useEffect(() => {
    let interval;

    if (stopwatch) {
      interval = setInterval(() => {
        setInitialTime((preTime) => preTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stopwatch]);

  const startStopwatch = () => {
    setStopwatch(true);
  };

  const breakStopwatch = () => {
    setStopwatch(false);
  };

  const resetStopwatch = () => {
    setStopwatch(false);
    setInitialTime(0);
  };

  const timeFormat = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minute = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    const finalTime =
      String(hours).padStart(2, 0) +
      ":" +
      String(minute).padStart(2, 0) +
      ":" +
      String(seconds).padStart(2, 0);

    return finalTime;
  };

  return (
    <>
      {user ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-800 via-blue-800 to-blue-900 text-white font-sans">
          <div className="text-center max-w-md mx-auto relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 flex items-center justify-center shadow-md mx-auto mb-4 transition-colors duration-300">
              <div
                onClick={startStopwatch}
                id="stopwatch"
                className="text-4xl font-bold cursor-pointer"
              >
                {timeFormat(initialTime)}
              </div>
            </div>
            <div className="text-center space-x-2">
              {stopwatch ? (
                <>
                  <Button
                    variant="gradient"
                    color="red"
                    onClick={breakStopwatch}
                  >
                    Break
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="gradient"
                    color="blue-gray"
                    onClick={startStopwatch}
                  >
                    {initialTime > 0 ? "Resume" : "Start"}
                  </Button>

                  <Modal
                    text={"Reset"}
                    resetStopwatch={resetStopwatch}
                    time={timeFormat(initialTime)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
