import { useEffect, useState } from "react";
import line from "../../assets/line.png";
import pressure from "../../assets/pressure.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";

// Weather component to display current weather information
const Weather = () => {
  // State variables for weather data, date, and time
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Fetch weather data from the API on component mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '04e4adac5abd87b85d439261a8593250';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  // Set current time in AM/PM format
  useEffect(() => {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Convert 0 to 12
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedTime = hours + ":" + minutes + " " + ampm;
    setTime(formattedTime);
  }, []);

  // Set current date in DD-MM-YYYY format
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = dd + "-" + mm + "-" + yyyy;
    setDate(formattedDate);
  }, []);

  return (
    <div
      style={{
        width: "26.24vw",
        minHeight: "18vh",
        background: "#101744",
        borderRadius: "12.8px",
        margin: "38vh 0 0 13vw",
        position: "absolute",
        fontFamily: "DM Sans",
      }}
    >
      {/* Display date and time */}
      <div
        style={{
          height: "5.76vh",
          background: "#FF4ADE",
          borderRadius: "12.8px 12.8px 0 0",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "1.344rem",
          fontFamily: "roboto",
        }}
      >
        <span>{date}</span>
        <span>{time.toUpperCase()}</span>
      </div>

      <div>
        {/* Display weather information */}
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {/* Section 1 - Weather condition */}
            <div style={{ marginTop: "-6.4px" }}>
              {weather.weather && weather.weather[0] && (
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  style={{ width: "52.48px", height: "48px", margin: "0 6.4px 0 25.6px" }}
                  alt="Weather Condition"
                />
              )}
              {weather.weather && weather.weather[0] && (
                <p style={{ fontSize: "16px", margin: "0px 0px 0px 12.8px", marginTop: "3.2px" }}>
                  {weather.weather[0].description}
                </p>
              )}
            </div>

            {/* Line separator */}
            <img src={line} style={{ height: "41.6px" }} />

            {/* Section 2 - Temperature and Pressure */}
            <div>
              {weather.main && weather.main.temp && (
                <p
                  style={{
                    marginBottom: "3.84px",
                    fontSize: "28.8px",
                    marginTop: "3.84px",
                    marginLeft: "10px",
                  }}
                >
                  <span>{weather.main.temp}</span>°C
                </p>
              )}
              {weather.main && weather.main.pressure && (
                <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                  <img src={pressure} style={{ height: "17.92px", width: "9.6px" }} alt="pressure" />
                  <p style={{ marginLeft: "4.8px", marginBottom: "3.84px", marginTop: "3.84px" }}>
                    {weather.main.pressure} mbar <br /> pressure
                  </p>
                </div>
              )}
            </div>

            {/* Line separator */}
            <img src={line} style={{ height: "41.6px" }} />

            {/* Section 3 - Wind and Humidity */}
            <div>
              {weather.wind && weather.wind.speed && (
                <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                  <img src={wind} style={{ height: "16px", width: "16px" }} alt="wind" />
                  <p
                    style={{
                      marginBottom: "3.84px",
                      marginTop: "3.84px",
                      marginLeft: "4.8px",
                    }}
                  >
                    {weather.wind.speed} km/h <br /> wind
                  </p>
                </div>
              )}

              {weather.main && weather.main.humidity && (
                <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                  <img src={humidity} style={{ height: "17.92px", width: "11.52px" }} alt="humidity" />
                  <p
                    style={{
                      marginBottom: "3.84px",
                      marginTop: "6.4px",
                      marginLeft: "4.8px",
                    }}
                  >
                    {weather.main.humidity} % <br /> humidity
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
