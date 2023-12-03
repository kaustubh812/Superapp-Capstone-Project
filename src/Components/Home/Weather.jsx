import { useEffect, useState } from "react";
import line from "../../assets/line.png";
import pressure from "../../assets/pressure.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";

const Weather = () => {
    // State variables to store date, time, and weather data
    const [weather, setWeather] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Fetch weather data from the API on component mount
    useEffect(() => {
        const fetchWeather = async () => {
            await fetch(
                "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
            )
                .then(async (data) => await data.json())
                .then((data) => setWeather(data));
        };
        fetchWeather();
    }, []);

    // Set the current time in AM/PM format
    useEffect(() => {
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        setTime(strTime);
    });

    // Set the current date in DD-MM-YYYY format
    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        const formattedToday = dd + "-" + mm + "-" + yyyy;
        setDate(formattedToday);
    });

    return (
        <div
            style={{
                width: "41vw",
                minHeight: "25vh",
                background: "#101744",
                borderRadius: "20px",
                margin: "65vh 0 0 15vw",
                position: "absolute",
                fontFamily: "DM Sans",
            }}
        >
            {/* Date and time display */}
            <div
                style={{
                    height: "9vh",
                    background: "#FF4ADE",
                    borderRadius: "20px",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    fontSize: "2.1rem",
                    fontFamily: "roboto",
                }}
            >
                <span>{date}</span>
                <span>{time.toUpperCase()}</span> {/* Here used toUpperCase() to get the am & pm in capital */}
            </div>

            <div>
                {/* Weather information display */}
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
                        <div style={{ marginTop: "-10px" }}>
                            <img
                                src={weather.current.condition.icon}
                                style={{ width: "82px", height: "75px", margin: "0 10px 0 40px" }}
                            />
                            <p style={{ fontSize: "25px", margin: "0px 0px 0px 20px", marginTop: "5px" }}>
                                {weather.current.condition.text}
                            </p>
                        </div>

                        {/* Line separator */}
                        <img src={line} style={{ height: "65px" }} />

                        {/* Section 2 - Temperature and Pressure */}
                        <div>
                            <p
                                style={{
                                    marginBottom: "6px", // Adjust the margin-bottom
                                    fontSize: "45px",
                                    marginTop: "6px", // Adjust the margin-top
                                }}
                            >
                                <span>{weather.current.temp_c}</span>°C
                            </p>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={pressure} style={{ height: "28px", width: "15px" }} alt="pressure" />
                                <p style={{ marginLeft: "8px", marginBottom: "6px", marginTop: "6px" }}>
                                    {weather.current.pressure_mb} mbar <br /> pressure
                                </p>
                            </div>
                        </div>

                        {/* Line separator */}
                        <img src={line} style={{ height: "65px" }} />

                        {/* Section 3 - Wind and Humidity */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={wind} style={{ height: "25px", width: "25px" }} alt="wind" />
                                <p
                                    style={{
                                        marginBottom: "6px", // Adjust the margin-bottom
                                        marginTop: "6px", // Adjust the margin-top
                                        marginLeft: "8px", // Add space between image and text
                                    }}
                                >
                                    {weather.current.wind_kph} km/h <br /> wind
                                </p>
                            </div>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={humidity} style={{ height: "28px", width: "18px" }} alt="humidity" />
                                <p
                                    style={{
                                        marginBottom: "6px", // Adjust the margin-bottom
                                        marginTop: "10px", // Adjust the margin-top
                                        marginLeft: "8px", // Add space between image and text
                                    }}
                                >
                                    {weather.current.humidity} % <br /> humidity
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Weather;
