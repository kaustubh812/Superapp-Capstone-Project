import React from "react";
import Profile from "../Components/Home/Profile";
import Weather from "../Components/Home/Weather";
import News from "../Components/Home/News";
import AllNotes from "../Components/Home/AllNotes";
import TimerCard from "../Components/Home/TimerCard";

const HomePage = () => {
    return (
        <>
            <Profile />
            <Weather />
            <News />
            <AllNotes/>
            <TimerCard/>
        </>
        
    )
}

export default HomePage