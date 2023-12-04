import React, { useEffect, useState } from "react";

const News = () => {
    // State variables to store news data, date, and time
    const [news, setNews] = useState(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const receiveNews = async () => {
            try {
                const response = await fetch(
                    "https://newsapi.org/v2/top-headlines?country=us",
                    {
                        method: 'GET',
                        headers: {
                            'X-Api-Key': '0d4b689650d4422c92be83b3bdd152cd',
                            'Authorization': 'Bearer 0d4b689650d4422c92be83b3bdd152cd'
                        },
                    }
                );
                const data = await response.json();
                setNews(data.articles && data.articles.length > 0 ? data.articles[0] : null);
            } catch (error) {
                console.error("Error fetching news data:", error);
            } finally {
                setLoading(false);
            }
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
    }, []);

    // Set the current date when the component renders
    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        const formattedToday = `${dd}-${mm}-${yyyy}`;
        setDate(formattedToday);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

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
            {news && news.urlToImage && (
                <img
                    src={news.urlToImage}
                    style={{ height: "56.2vh", borderRadius: "20px 20px 0 0", width: "20vw", margin: "-1vh 0 0 68vw" }}
                    alt="News"
                />
            )}

            {/* News Description */}
            {news && news.description && (
                <div
                    style={{
                        height: "32vh",
                        borderRadius: "0 0 20px 20px",
                        width: "20vw",
                        background: "white",
                        fontFamily: "DM Sans",
                        fontWeight: "400",
                        fontSize: "0.9rem",
                        padding: "19px",
                        position: "absolute",
                        top: "56vh",
                        left: "68.4vw",
                        boxSizing: "border-box",
                    }}
                >
                    {news.description}
                </div>
            )}

            {/* News Title and Metadata */}
            {news && news.title && (
                <div
                    style={{
                        fontFamily: "DM Sans",
                        position: "absolute",
                        width: "20vw",
                        margin: "0 0 0 68vw",
                        height: "20vh",
                        background: "rgba(0, 0, 0, 0.74)",
                        top: "36vh",
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
            )}
        </div>
    );
};

export default News;
