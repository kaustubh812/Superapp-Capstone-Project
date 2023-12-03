import React from "react";
import Profile from "../Components/Home/Profile";
import Weather from "../Components/Home/Weather";
import News from "../Components/Home/News";

const HomePage = () => {
    return (
        <>
            <Profile />
            <Weather />
            <News />
        </>
    )
}

export default HomePage