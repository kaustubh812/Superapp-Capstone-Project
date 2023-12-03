import { useEffect, useState } from "react";

const News = () => {
    // State variables to store news data, date, and time
    const [news, setNews] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Fetch news data when the component mounts
    useEffect(() => {
        const receiveNews = async () => {
            const response = await fetch(
                "https://newsapi.org/v2/everything?q=apple&from=2023-12-02&to=2023-12-02&sortBy=popularity&apiKey=0d4b689650d4422c92be83b3bdd152cd"
            );
            const data = await response.json();
            setNews(data.articles[0]);
        };
        receiveNews();
    }, []);

    // Set the current time when the component renders
    useEffect(() => {
        const currentDate = new Date();
        const hours = currentDate.getHours() % 12 || 12;
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        const ampm = currentDate.getHours() >= 12 ? "pm" : "am";
        const strTime = `${hours}:${minutes} ${ampm}`;
        setTime(strTime);
    });

    // Set the current date when the component renders
    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        const formattedToday = `${dd}-${mm}-${yyyy}`;
        setDate(formattedToday);
    });

    return (
        <div
            style={{
                height: "90vh",
                width: "30vw",
                position: "absolute",
                borderRadius: "20px",
                padding: "6px",
            }}
        >
            {/* News Image */}
            <img
                src={news.urlToImage}
                style={{ height: "51vh", borderRadius: "20px 20px 0 0", width: "20vw", margin: "9vh 0 0 77vw" }}
            />

            {/* News Description */}
            <div
                style={{
                    height: "30vh",
                    borderRadius: "0 0 20px 20px",
                    width: "20vw",
                    background: "white",
                    fontFamily: "DM Sans",
                    fontWeight: "400",
                    fontSize: "0.9rem",
                    padding: "19px",
                    position: "absolute",
                    top: "61vh",
                    left: "77.4vw",
                    boxSizing: "border-box",
                }}
            >
                {news.description}
            </div>

            {/* News Title and Metadata */}
            <div
                style={{
                    fontFamily: "DM Sans",
                    position: "absolute",
                    width: "20vw",
                    margin: "0 0 0 77vw",
                    height: "20vh",
                    background: "rgba(0, 0, 0, 0.74)",
                    top: "40.8vh",
                    padding: "10px",
                    boxSizing: "border-box",
                }}
            >
                <p style={{ color: "white", fontSize: "1.3rem", marginBottom: "10px", marginTop: "0", fontFamily: "roboto", fontWeight: "600" }}>
                    {news.title}
                </p>
                {/* Metadata: Date and Time */}
                <span style={{ color: "white", fontSize: "1rem", marginRight: "10px" }}>
                    {date} &nbsp;|
                </span>
                <span style={{ color: "white", fontSize: "1rem", marginRight: "10px" }}>
                    {time}
                </span>
            </div>
        </div>
    );
};

export default News;
