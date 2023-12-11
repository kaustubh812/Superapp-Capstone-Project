// Importing image assets and necessary components
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import dots from "../../assets/dots.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import sound from "../../assets/simple.mp3";

// Functional component for the timer card
const TimerCard = () => {
  // State variables for hours, minutes, seconds, playing state, and cursor visibility
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  // Function to increase seconds, minutes, and hours
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };

  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };

  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };

  // Function to decrease seconds, minutes, and hours
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };

  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };

  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  // Function to format total seconds into hours, minutes, and seconds
  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  // Handling button click to toggle play/pause and hide cursor
  const handleButtonClick = () => {
    setPlaying((prev) => !prev);
    setHideCursor(true);
  };

  // Creating an audio element for the sound
  const audio = new Audio(sound);

  // Function to play the sound
  const playSound = () => {
    console.log("Trying to play sound");
    audio.play();
  };

  // useEffect to play sound when the timer reaches 0 and is not playing
  useEffect(() => {
    if (!playing && seconds === 0 && minutes === 0 && hours === 0) {
      playSound();
    }
  }, [playing, seconds, minutes, hours]);

  // Props for the CountdownCircleTimer component
  const timerProps = {
    isPlaying: playing,
    duration: seconds + minutes * 60 + hours * 60 * 60,
    colors: ["#FF6A6A"],
    style: { borderColor: "transparent" },
    strokeWidth: 7,
    onComplete: () => playSound(), // Callback when the timer completes
  };

  // JSX for the TimerCard component
  return (
    <div
      style={{
        width: "53vw",
        height: "27vh",
        background: "#1E2343",
        position: "absolute",
        borderRadius: "12px",
        margin: "5vh 0 0 13vw",
        display: "flex",
        boxSizing: "border-box",
        padding: "12px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {/* CountdownCircleTimer component */}
      <div
        style={{
          boxShadow: "0px 6px 26px 0px #0000009C inset, -3px -7.000000476837158px 16px 0px #5F58583B",
          background: "#191E39",
          borderRadius: "50%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <CountdownCircleTimer {...timerProps}>
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "1.5rem", fontFamily: "DM Sans" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>

      {/* Timer controls */}
      <div style={{ width: "35vw", height: "15px", textAlign: "center", marginTop: "-200px" }}>
        {/* Hours, Minutes, and Seconds controls */}
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "2rem",
            justifyContent: "center",
            fontFamily: "DM Sans",
            gap: "2vw"
          }}
        >
          {/* Hours control */}
          <div style={{ textAlign: "center", marginTop: "-2px" }}>
            <p style={{ fontFamily: "DM Sans", fontSize: "20px", color: "rgba(148, 148, 148, 1)" }}>Hours</p>
            <img
              style={{ width: "18px", height: "12px", position: "absolute", marginTop: "-5px", marginLeft: "-8px" }}
              onClick={increaseHour}
              src={up}
              alt="up"
            />
            <p style={{ paddingTop: "6px" }}>{hours < 10 ? `0${hours}` : hours}</p>
            <img
              style={{ width: "18px", height: "12px", position: "absolute", marginLeft: "-8px", marginTop: "-25px" }}
              onClick={decreaseHour}
              src={down}
              alt="down"
            />
          </div>
          <img src={dots} style={{ height: "30px", margin: "12vh 0 0 0 " }} alt="dots" />

          {/* Minutes control */}
          <div style={{ textAlign: "center", marginTop: "-2px" }}>
            <p style={{ fontFamily: "DM Sans", fontSize: "20px", color: "rgba(148, 148, 148, 1)" }}>Minutes</p>
            <img
              style={{ width: "18px", height: "12px", marginTop: "-5px", position: "absolute", marginLeft: "-8px" }}
              onClick={increaseMinute}
              src={up}
              alt="up"
            />
            <p style={{ paddingTop: "6px" }}>{minutes < 10 ? `0${minutes}` : minutes}</p>
            <img
              style={{ width: "18px", height: "12px", position: "absolute", marginLeft: "-8px", marginTop: "-25px" }}
              onClick={decreaseMinute}
              src={down}
              alt="down"
            />
          </div>
          <img src={dots} style={{ height: "30px", margin: "12vh 0 0 0 " }} alt="dots" />

          {/* Seconds control */}
          <div style={{ textAlign: "center", marginTop: "-2px" }}>
            <p style={{ fontFamily: "DM Sans", fontSize: "20px", color: "rgba(148, 148, 148, 1)" }}>Seconds</p>
            <img
              style={{ width: "18px", height: "12px", position: "absolute", marginTop: "-5px", marginLeft: "-8px" }}
              onClick={increaseSecond}
              src={up}
              alt="up"
            />
            <p style={{ paddingTop: "6px" }}>{seconds < 10 ? `0${seconds}` : seconds}</p>
            <img
              style={{ width: "18px", height: "12px", position: "absolute", marginLeft: "-8px", marginTop: "-25px" }}
              onClick={decreaseSecond}
              src={down}
              alt="down"
            />
          </div>
        </div>

        {/* Start/Pause button */}
        <div
          onClick={handleButtonClick}
          onMouseEnter={() => setHideCursor(false)}
          onMouseLeave={() => setHideCursor(true)}
          style={{
            marginTop: "-16px",
            background: "#FF6A6A",
            borderRadius: "20px",
            fontSize: "22px",
            padding: "0px",
            color: "white",
            textAlign: "center",
            height: "35px",
            width: "350px",
            marginLeft: "90px",
            fontFamily: "DM Sans",
            cursor: hideCursor ? "none" : "pointer",
          }}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};

// Exporting the TimerCard component
export default TimerCard;
